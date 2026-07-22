import Image from "next/image";

type ShowcaseFeature = {
  title: string;
  description: string;
  linkText: string;
  href: string;
  image: string;
  imageAlt: string;
  imageSize: [number, number];
};

type IndexFeature = {
  title: string;
  description: string;
  tags?: string[];
  linkText: string;
  href: string;
};

const showcase: ShowcaseFeature[] = [
  {
    title: "Open source by design",
    description:
      "Own the full source code, adapt the platform to your organization, and extend it quickly with development containers—without waiting on a vendor roadmap.",
    linkText: "Explore development",
    href: "https://docs.terrakube.io/getting-started/development/dev-container",
    image: "/workspace-data.png",
    imageAlt: "Terrakube workspace data view",
    imageSize: [1920, 1143],
  },
  {
    title: "Terraform & OpenTofu",
    description:
      "Run your preferred infrastructure-as-code engine across cloud and on-premises environments while teams collaborate in one place.",
    linkText: "Explore workspaces",
    href: "https://docs.terrakube.io/user-guide/workspaces/creating-workspaces",
    image: "/terraform-tofu.png",
    imageAlt: "Terraform and OpenTofu support",
    imageSize: [1540, 780],
  },
  {
    title: "Visual state",
    description:
      "Understand every managed resource and inspect Terraform state from a clear visual interface in a single click.",
    linkText: "View documentation",
    href: "https://docs.terrakube.io/user-guide/workspaces/terraform-state#visual-state",
    image: "/visual-state.png",
    imageAlt: "Visual Terraform state viewer",
    imageSize: [1920, 1153],
  },
  {
    title: "Private registry",
    description:
      "Publish, discover, and reuse approved internal modules and providers without exposing them outside your organization.",
    linkText: "Set up the registry",
    href: "https://docs.terrakube.io/user-guide/private-registry",
    image: "/registry.png",
    imageAlt: "Private module and provider registry",
    imageSize: [1920, 994],
  },
];

const index: IndexFeature[] = [
  {
    title: "Single sign-on",
    description:
      "Connect the identity provider your organization already trusts and centralize access to every Terrakube workspace.",
    tags: ["Entra ID", "Google", "Cognito", "GitHub", "Keycloak", "OIDC & SAML"],
    linkText: "Manage identities",
    href: "https://docs.terrakube.io/getting-started/user-management",
  },
  {
    title: "Granular access control",
    description:
      "Give people and automation only the access they need with organization roles, teams, and scoped tokens.",
    tags: ["Personal access tokens", "Team tokens"],
    linkText: "Manage roles",
    href: "https://docs.terrakube.io/user-guide/organizations/team-management",
  },
  {
    title: "Private agents",
    description:
      "Run workflows on unlimited self-hosted or ephemeral agents while keeping execution secure, isolated, and inside your network.",
    linkText: "Deploy ephemeral agents",
    href: "https://docs.terrakube.io/getting-started/deployment/ephemeral-agents",
  },
  {
    title: "Dynamic credentials",
    description:
      "Replace long-lived secrets with short-lived credentials issued just in time for each workflow run.",
    tags: ["Azure", "Google Cloud", "AWS", "Vault", "OpenBao"],
    linkText: "Configure authentication",
    href: "https://docs.terrakube.io/user-guide/workspaces/dynamic-provider-credentials",
  },
  {
    title: "Custom workflows",
    description:
      "Build reusable workflows that connect your infrastructure lifecycle to the tools and checks your team already uses.",
    linkText: "Build a workflow",
    href: "https://docs.terrakube.io/user-guide/organizations/templates",
  },
  {
    title: "Scheduled jobs",
    description:
      "Schedule plans, applies, and maintenance workflows to run reliably without manual intervention.",
    linkText: "Set up schedules",
    href: "https://docs.terrakube.io/user-guide/workspaces/workspace-scheduler",
  },
  {
    title: "Self-hosted anywhere",
    description:
      "Deploy to Kubernetes in any cloud or on premises, or get started quickly with Docker Compose.",
    linkText: "Choose a deployment",
    href: "https://docs.terrakube.io/getting-started/deployment/minikube-+-https",
  },
];

function Tags({ title, tags }: { title: string; tags: string[] }) {
  return (
    <div className="tag-list" aria-label={`${title} integrations`}>
      {tags.map((tag) => (
        <span key={tag} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function Features() {
  return (
    <section className="features-section">
      <div className="container-shell section-wrap">
        <div className="section-heading reveal">
          <p className="eyebrow">The platform</p>
          <h2>Everything your team needs to ship infrastructure safely.</h2>
          <p>
            A focused control plane for automation, collaboration, governance, and the
            day-to-day work of managing infrastructure at scale.
          </p>
        </div>

        <div className="feature-showcase">
          {showcase.map((feature, i) => (
            <article
              key={feature.title}
              className={`feature-row reveal ${i % 2 === 1 ? "is-flipped" : ""}`}
            >
              <div className="feature-copy">
                <h3>{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <a
                  className="feature-link"
                  href={feature.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {feature.linkText} <span aria-hidden>↗</span>
                </a>
              </div>
              <div className="feature-visual">
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  width={feature.imageSize[0]}
                  height={feature.imageSize[1]}
                />
              </div>
            </article>
          ))}
        </div>

        <div className="index-grid reveal">
          <div className="index-cell index-cell-label">
            <p>More of the platform</p>
          </div>
          {index.map((feature) => (
            <a
              key={feature.title}
              className="index-cell"
              href={feature.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{feature.title}</h3>
              <p className="index-description">{feature.description}</p>
              {feature.tags && <Tags title={feature.title} tags={feature.tags} />}
              <span className="index-action">
                {feature.linkText} <span aria-hidden>↗</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
