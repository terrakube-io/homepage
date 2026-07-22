import Image from "next/image";
import { SLACK_INVITE_URL } from "./nav-links";

const involvement = [
  "Share ideas in GitHub Discussions",
  "Report bugs and suggest features",
  "Help other users in the Slack community",
  "Test deployments across cloud providers",
];

function CheckIcon() {
  return (
    <svg
      aria-hidden
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export default function Community() {
  return (
    <section className="community-section">
      <div className="container-shell">
        <div className="community-layout reveal">
          <div>
            <p className="eyebrow">Built together</p>
            <h2>There is a place for you in the Terrakube community.</h2>
            <p className="community-copy">
              Fix a bug, improve the docs, test a deployment, or simply tell us what
              would make Terrakube better. Every contribution moves the project forward.
            </p>
            <a
              className="button community-button"
              href={SLACK_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/slack.png" alt="" width={17} height={17} />
              Join the Slack community <span aria-hidden>→</span>
            </a>
          </div>

          <div>
            <p className="involvement-title">Ways to get involved</p>
            <ul className="involvement-list">
              {involvement.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <footer className="site-footer">
          <div className="footer-brand">
            <Image src="/terrakube.png" alt="" width={18} height={21} />
            Terrakube
          </div>
          <span>Open source infrastructure automation.</span>
        </footer>
      </div>
    </section>
  );
}
