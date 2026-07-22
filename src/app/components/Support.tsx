const supportLinks = [
  {
    label: "GitHub Sponsors",
    text: "Sponsor Terrakube on GitHub",
    href: "https://github.com/sponsors/terrakube-io",
  },
  {
    label: "Open Collective",
    text: "Support our collective",
    href: "https://opencollective.com/terrakube",
  },
  {
    label: "Get in touch",
    text: "sponsor@terrakube.io",
    href: "mailto:sponsor@terrakube.io",
  },
];

export default function Support() {
  return (
    <section className="support-section">
      <div className="container-shell section-wrap support-layout">
        <div className="section-heading reveal">
          <p className="eyebrow">Keep it independent</p>
          <h2>Help us build in the open.</h2>
          <p>
            Terrakube is powered by contributors and supporters who want infrastructure
            automation to stay open and accessible.
          </p>
        </div>

        <div className="support-links reveal">
          {supportLinks.map((link) => (
            <a
              key={link.href}
              className="support-row"
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            >
              <small>{link.label}</small>
              <strong>{link.text}</strong>
              <span className="support-arrow" aria-hidden>↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
