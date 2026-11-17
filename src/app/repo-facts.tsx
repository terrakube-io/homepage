"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

export type RepoFacts = { stars: number; release?: { tag: string; publishedAt: string } };

const REPO_URL = "https://github.com/terrakube-io/terrakube";
const API = "https://api.github.com/repos/terrakube-io/terrakube";
// GitHub caches these responses for 60 s; polling faster only returns the same body.
const POLL_MS = 60_000;
const BACKOFF_MS = 10 * 60_000;

export const formatStars = (n: number) => new Intl.NumberFormat("en").format(n);
export const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(iso));

/*
 * One poller shared by every subscriber. Requests use `cache: "no-cache"`, so the browser
 * revalidates with the stored ETag: an unchanged repository answers 304, which GitHub does not
 * count against the 60 requests per hour an anonymous visitor gets. Polling stops while the tab
 * is hidden and backs off when the rate limit is hit.
 */
let live: RepoFacts | null = null;
let seed: RepoFacts | null = null;
const listeners = new Set<() => void>();
let timer: ReturnType<typeof setTimeout> | undefined;
let lastPoll = 0;

async function get(url: string) {
  const res = await fetch(url, { cache: "no-cache" });
  if (res.status === 403 || res.status === 429) throw new Error("rate limited");
  return res.ok ? res.json() : null;
}

async function poll() {
  clearTimeout(timer);
  lastPoll = Date.now();
  let delay = POLL_MS;
  try {
    const [repo, release] = await Promise.all([get(API), get(`${API}/releases/latest`)]);
    if (typeof repo?.stargazers_count === "number") {
      const next: RepoFacts = {
        stars: repo.stargazers_count,
        release:
          release?.tag_name && release?.published_at
            ? { tag: release.tag_name, publishedAt: release.published_at }
            : (live ?? seed)?.release,
      };
      const current = live ?? seed;
      if (next.stars !== current?.stars || next.release?.tag !== current?.release?.tag) {
        live = next;
        listeners.forEach((l) => l());
      }
    }
  } catch {
    delay = BACKOFF_MS;
  }
  if (listeners.size && !document.hidden) timer = setTimeout(poll, delay);
}

function onVisibility() {
  if (document.hidden) clearTimeout(timer);
  else timer = setTimeout(poll, Math.max(0, lastPoll + POLL_MS - Date.now()));
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  if (listeners.size === 1) {
    document.addEventListener("visibilitychange", onVisibility);
    // The page was built with fresh numbers, so the first check can wait a little.
    if (!document.hidden) timer = setTimeout(poll, lastPoll ? Math.max(0, lastPoll + POLL_MS - Date.now()) : 5_000);
  }
  return () => {
    listeners.delete(listener);
    if (!listeners.size) {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", onVisibility);
    }
  };
}

/** Live facts once the first poll lands, the build-time ones until then. */
function useRepoFacts(initial: RepoFacts | null) {
  seed ??= initial;
  return useSyncExternalStore(subscribe, () => live, () => null) ?? initial;
}

/** True on the render where `value` differs from the one before, so the change can be marked. */
function useChanged<T>(value: T) {
  const prev = useRef(value);
  const changed = prev.current !== value;
  useEffect(() => {
    prev.current = value;
  }, [value]);
  return changed;
}

export function GitHubButton({ initial }: { initial: RepoFacts | null }) {
  const facts = useRepoFacts(initial);
  const stars = facts?.stars;
  const changed = useChanged(stars);
  return (
    <a className="btn" href={REPO_URL} aria-label={stars != null ? `GitHub, ${formatStars(stars)} stars` : "GitHub"}>
      <span className="gh-mark" aria-hidden="true" />
      <span className="header-label">GitHub</span>
      {stars != null && (
        <span key={stars} className={changed ? "btn-count is-updated" : "btn-count"}>
          {formatStars(stars)}
        </span>
      )}
    </a>
  );
}

export function ReleaseLine({ initial }: { initial: RepoFacts | null }) {
  const release = useRepoFacts(initial)?.release;
  const changed = useChanged(release?.tag);
  if (!release) return null;
  return (
    <>
      <a key={release.tag} href={`${REPO_URL}/releases/latest`} className={changed ? "is-updated" : undefined}>
        Release <code>{release.tag}</code>, {formatDate(release.publishedAt)}
      </a>
      <span aria-hidden="true"> · </span>
    </>
  );
}
