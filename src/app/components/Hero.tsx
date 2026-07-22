import Image from "next/image";

const benefits = ["No vendor lock-in", "No licensing headache", "Self-hosted anywhere"];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div aria-hidden className="hero-grid-pattern" />

      <div className="container-shell hero-inner">
        <div className="hero-badge rise" style={{ animationDelay: "50ms" }}>
          <span className="hero-badge-dot" />
          Open source IaC automation
        </div>

        <h1 className="rise" style={{ animationDelay: "130ms" }}>
          Infrastructure automation, <span className="hero-accent-text">without the lock-in.</span>
        </h1>

        <p className="hero-copy rise" style={{ animationDelay: "210ms" }}>
          Give every team a secure, collaborative way to run and manage Terraform or
          OpenTofu at scale — from pull request to production.
        </p>

        <div className="hero-actions rise" style={{ animationDelay: "290ms" }}>
          <a
            className="button button-primary"
            href="https://docs.terrakube.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start building <span aria-hidden>→</span>
          </a>
          <a
            className="button button-secondary"
            href="https://github.com/terrakube-io/terrakube"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub <span aria-hidden>↗</span>
          </a>
        </div>

        <div className="hero-proof rise" style={{ animationDelay: "370ms" }}>
          {benefits.map((benefit) => (
            <p key={benefit} className="proof-item">
              <span className="proof-check" aria-hidden>✓</span>
              {benefit}
            </p>
          ))}
        </div>

        <div className="hero-visual rise" style={{ animationDelay: "450ms" }}>
          <div className="product-window">
            <div className="window-bar" aria-hidden>
              <span className="window-dot" />
              <span className="window-dot" />
              <span className="window-dot" />
              <span className="window-title">terrakube.example.com</span>
            </div>
            <Image
              src="/fullpage.png"
              alt="Terrakube workspace dashboard"
              width={1920}
              height={1393}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
