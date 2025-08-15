import Image from "next/image";
import LogoBackground from "./LogoBackground";
import PatronBackground from './PatronBackground';
import PointBackground from "./PointBackground";
import HamburgerMenu from "./HamburgerMenu";

export default function Home() {
  return (
    <div className="main-container relative min-h-screen flex flex-col p-8 pb-20 pt-0 gap-16 sm:p-20 sm:pt-0 overflow-x-hidden">
      {/* ========================================
          HEADER SECTION
      ======================================== */}
      <header>
        <div className="contenedorLogoTexto">
          <Image
            className="logo"
            src="/terrakube.png"
            alt="terrakube logo"
            width={47}
            height={45}
            priority
          />
          <h1 className="textoEncabezado">Terrakube</h1>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a className="header-button" href="https://docs.terrakube.io/"
             target="_blank" rel="noopener noreferrer">
            <Image src="/gitbooklogo.svg" alt="Gitbook" width={20} height={20} />
            Docs</a>
          <a className="header-button" href="https://github.com/terrakube-io/terrakube"
             target="_blank" rel="noopener noreferrer">
            <Image src="/github-mark-white.svg" alt="Github" width={20} height={20} />
            Github</a>
          <a className="header-button" href="https://join.slack.com/t/terrakubeworkspace/shared_invite/zt-2cx6yn95t-2CTBGvsQhBQJ5bfbG4peFg"
             target="_blank" rel="noopener noreferrer">
            <Image src="/slack.png" alt="Slack" width={20} height={20} />
            Slack</a>
        </div>
        <HamburgerMenu 
          links={[
            {
              href: "https://docs.terrakube.io/",
              icon: "/gitbooklogo.svg",
              alt: "Gitbook",
              text: "Documentation"
            },
            {
              href: "https://github.com/terrakube-io/terrakube",
              icon: "/github-mark-white.svg",
              alt: "Github",
              text: "Github"
            },
            {
              href: "https://join.slack.com/t/terrakubeworkspace/shared_invite/zt-2cx6yn95t-2CTBGvsQhBQJ5bfbG4peFg",
              icon: "/slack.png",
              alt: "Slack",
              text: "Slack"
            }
          ]}
        />
      </header>

      <main className="flex flex-col gap-8 items-center w-full max-w-7xl mx-auto">
        {/* ========================================
            SECCIÓN DECO - HERO DECO
        ======================================== */}
        <LogoBackground position="left" logoOpacity={1} logoSize={200} verticalPosition={400} />
        <PointBackground position="right" logoOpacity={1} logoSize={90} verticalPosition={400} />

        <PatronBackground position="left" logoOpacity={0.4} logoSize={900} verticalPosition={1000} />
        <PatronBackground position="right" logoOpacity={0.4} logoSize={1200} verticalPosition={2000} />

        {/* ========================================
            SECCIÓN HERO - HERO SECTION
        ======================================== */}
        <div className="hero-section relative-container z-10">
          <div className="hero-title">
            <p>The open source platform that helps teams</p>
            <p>manage their infrastructure as code at scale using</p>
            <p className="hero-highlight-text">Terraform or OpenTofu.</p>
          </div>
          <div className="hero-subtitle">
            <p>No vendor lock-in, No licensing headache, Self Hosted anywhere</p>
          </div>
        </div>

        <hr className="border-t-2 border-gray-300 my-20 w-[400px] mx-auto" />

        {/* ========================================
            SECCIÓN WHY CHOOSE TERRAKUBE - WHY CHOOSE SECTION
        ======================================== */}
        <div className="hero-section">
          <div className="hero-title text-white">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-[#F9A226] to-[#F1613D] bg-clip-text text-transparent">
              Terrakube
            </span>
            ?
          </div>
          <div className="hero-subtitle">
            <p>Everything you need to automate, collaborate, run and manage your infrastructure</p>
          </div>
        </div>

        {/* ========================================
            SECCIONES DE CARACTERÍSTICAS - FEATURE SECTIONS
        ======================================== */}

        {/* FEATURE - Fully Open Source */}
        <div className="feature-section">
          <div className="feature-content">
            <div className="feature-title ">
              <p className="feature-highlight-blue">Open Source</p>
            </div>
            <div className="feature-description">
              <p>Complete access to the source code and the ability to customize and extend the platform to fit your organization needs
                 simply by using devcontainers to extend its core functionality in seconds.
              </p>
            </div>
            <a
              className="header-button button-description"
              href="https://docs.terrakube.io/getting-started/development/dev-container"
              rel="noopener noreferrer"
            >
              Development
            </a>
          </div>
          <div className="feature-image">
            <Image
              className="logo"
              src="/workspace-data.png"
              alt="terrakube logo"
              width={800}
              height={450}
              priority
            />
          </div>
          <hr className="border-t-2 border-gray-300 w-full mt-8" />
        </div>

        {/* FEATURE - Terraform & OpenTofu Support */}
        <div className="feature-section">
          <div className="feature-image">
            <Image
              className="logo"
              src="/terraform-tofu.png"
              alt="terrakube logo"
              width={800}
              height={450}
              priority
            />
          </div>
          <div className="feature-content">
            <div className="feature-title">
              <p className="feature-highlight-orange">Terraform & OpenTofu</p>
            </div>
            <div className="feature-description">
              <p>Support major infrastructure as code tools to handle any
                 cloud or on-premises configuration in a single place with
                 multiple teams collaborating together
              </p>
            </div>
            <a
              className="header-button"
              href="https://docs.terrakube.io/user-guide/workspaces/creating-workspaces"
              target="_blank"
              rel="noopener noreferrer"
            >
              Workspaces
            </a>
          </div>
          <hr className="border-t-2 border-gray-300  w-full mx-auto" />
        </div>

        {/* ========================================
            SECCIÓN DECO - HERO DECO
        ======================================== */}
        <LogoBackground position="left" logoOpacity={1} logoSize={330} verticalPosition={2500} />

        <PointBackground position="left" logoOpacity={1} logoSize={90} verticalPosition={3100} />

        {/* FEATURE - Single Sign-On (SSO) */}
        <div className="feature-section">
          <div className="feature-content">
            <div className="feature-title">
              <p className="feature-highlight-blue">Single Sign-On</p>
            </div>
            <div className="feature-description ulista">
              <p>Supports a wide range of identity providers allowing Terrakube to authenticate using any of the following services:</p>
              <ul>
                <li>Azure Entra ID</li>
                <li>Google Cloud Identity</li>
                <li>Amazon Cognito</li>
              </ul>
              <ul>
                <li>GitHub</li>
                <li>Keycloak</li>
                <li>OIDC, SAML, etc.</li>
              </ul>
            </div>
            <a
                className="header-button"
                href="https://docs.terrakube.io/getting-started/user-management"
                target="_blank"
                rel="noopener noreferrer"
            >
              User management
            </a>
          </div>
          <div className="feature-image">
            <Image
                className="logo"
                src="/login.png"
                alt="terrakube logo"
                width={800}
                height={450}
                priority
            />
          </div>
          <hr className="border-t-2 border-gray-300  w-full mx-auto" />
        </div>

        {/* FEATURE - ROLE BASED ACCESS CONTROL*/}
        <div className="feature-section">
          <div className="feature-image">
            <Image
                className="logo"
                src="/rbac.png"
                alt="terrakube logo"
                width={800}
                height={450}
                priority
            />
          </div>
          <div className="feature-content">
            <div className="feature-title">
              <p className="feature-highlight-orange">Access control</p>
            </div>
            <div className="feature-description ulista">
              <p>Restricts access based on a user&#39;s roles within an organization.
                Assigns permissions according to job responsibilities,
                ensuring only access to necessary information this also includes the ability to create and manage:
              </p>
              <ul>
                <li>Personal access tokens</li>
                <li>Team tokens</li>
              </ul>
            </div>
            <a
                className="header-button"
                href="https://docs.terrakube.io/user-guide/organizations/team-management"
                target="_blank"
                rel="noopener noreferrer"
            >
              Roles management
            </a>
          </div>
          <hr className="border-t-2 border-gray-300  w-full mx-auto" />
        </div>

        {/* FEATURE - Private Module/Provider Registry */}
        <div className="feature-section">
          <div className="feature-content">
            <div className="feature-title">
              <p className="feature-highlight-blue feature-title_espe">Private Registry</p>
            </div>
            <div className="feature-description">
              <p>Allow your teams to collaborate, reuse, manage and publish internal modules and providers privately</p>
            </div>
            <a
              className="header-button"
              href="https://docs.terrakube.io/user-guide/private-registry"
              target="_blank"
              rel="noopener noreferrer"
            >
              Setup
            </a>
          </div>
          <div className="feature-image">
            <Image
              className="logo"
              src="/registry.png"
              alt="terrakube logo"
              width={800}
              height={450}
              priority
            />
          </div>
          <hr className="border-t-2 border-gray-300  w-full mx-auto" />
        </div>

        {/* FEATURE - Self-Hosted & Ephemeral Agents */}
        <div className="feature-section">
          <div className="feature-image">
            <Image
              className="logo"
              src="/agents.png"
              alt="terrakube logo"
              width={800}
              height={450}
              priority
            />
          </div>
          <div className="feature-content">
            <div className="feature-title">
              <p className="feature-highlight-orange">Private Agents</p>
            </div>
            <div className="feature-description">
                <p>Support creating unlimited self-hosted or ephemeral agents.
                </p>
                <p>
                    These agents run workflows in a secure and isolated environment
                    allowing you to keep control over your infrastructure.
                </p>
            </div>
            <a
              className="header-button"
              href="https://docs.terrakube.io/getting-started/deployment/ephemeral-agents"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ephemeral agents
            </a>
          </div>
          <hr className="border-t-2 border-gray-300  w-full mx-auto" />
        </div>

        {/* FEATURE - Dynamic Credentials */}
        <div className="feature-section">
          <div className="feature-content">
            <div className="feature-title">
              <p className="feature-highlight-blue">Dynamic Credentials</p>
            </div>
            <div className="feature-description ulista">
              <p>Automates the process of authenticating with cloud providers or external services.
                It eliminates the need to use and manage long-lived, static credentials in your workspaces.
                Currently the following providers are supported:
              </p>
              <ul>
                <li>Azure</li>
                <li>Google Cloud</li>
                <li>Amazon Web Service</li>
              </ul>
              <ul>
                <li>Vault</li>
                <li>Openbao</li>
              </ul>
            </div>
            <a
                className="header-button"
                href="https://docs.terrakube.io/user-guide/workspaces/dynamic-provider-credentials"
                rel="noopener noreferrer"
            >
               Authentication
            </a>
          </div>
          <div className="feature-image">
            <Image
                className="logo"
                src="/execution.png"
                alt="terrakube logo"
                width={800}
                height={450}
                priority
            />
          </div>
          <hr className="border-t-2 border-gray-300  w-full mx-auto" />
        </div>

        {/* ========================================
            SECCIÓN DECO - HERO DECO
        ======================================== */}
        <LogoBackground position="right" logoOpacity={1} logoSize={210} verticalPosition={2600} />
        <PointBackground position="right" logoOpacity={1} logoSize={90} verticalPosition={3300} />

        <PatronBackground position="left" logoOpacity={0.4} logoSize={1200} verticalPosition={4000} />

        {/* FEATURE - Visual Terraform State Viewer */}
        <div className="feature-section">
          <div className="feature-image">
            <Image
                className="logo"
                src="/visual-state.png"
                alt="terrakube logo"
                width={800}
                height={450}
                priority
            />
          </div>
          <div className="feature-content">
            <div className="feature-title">
              <p className="feature-highlight-orange">Visual state</p>
            </div>
            <div className="feature-description">
              <p>See all resources in your infrastructure as code and check the state file with a single click</p>
            </div>
            <a
                className="header-button"
                href="https://docs.terrakube.io/user-guide/workspaces/terraform-state#visual-state"
                target="_blank"
                rel="noopener noreferrer"
            >
              Documentation
            </a>
          </div>
          <hr className="border-t-2 border-gray-300  w-full mx-auto" />
        </div>

        {/* FEATURE - Custom Workflows Integration */}
        <div className="feature-section">
          <div className="feature-content">
            <div className="feature-title">
              <p className="feature-highlight-blue">Custom workflows</p>
            </div>
            <div className="feature-description ulista">
              <p>Create simple or complex workflows to automate your infrastructure management using external tools.
              </p>
            </div>
            <a
                className="header-button"
                href="https://docs.terrakube.io/user-guide/organizations/templates"
                target="_blank"
                rel="noopener noreferrer"
            >
              Documentation
            </a>
          </div>
          <div className="feature-image">
            <Image
                className="logo"
                src="/custom-integration.png"
                alt="terrakube logo"
                width={800}
                height={450}
                priority
            />
          </div>
          <hr className="border-t-2 border-gray-300  w-full mx-auto" />
        </div>

        {/* ========================================
            SECCIÓN DECO - HERO DECO
        ======================================== */}

        <LogoBackground position="left" logoOpacity={1} logoSize={300} verticalPosition={6000} />

        {/* FEATURE - Scheduled jobs */}
        <div className="feature-section">
          <div className="feature-image">
            <Image
                className="logo"
                src="/schedules.png"
                alt="terrakube logo"
                width={800}
                height={450}
                priority
            />
          </div>
          <div className="feature-content">
            <div className="feature-title">
              <p className="feature-highlight-orange">Scheduled jobs</p>
            </div>
            <div className="feature-description">
              <p>Define your own schedules to execute different workflow operation automatically without any manual intervention</p>
            </div>
            <a
                className="header-button"
                href="https://docs.terrakube.io/user-guide/workspaces/workspace-scheduler"
                target="_blank"
                rel="noopener noreferrer"
            >
              Setup schedules
            </a>
          </div>
          <hr className="border-t-2 border-gray-300  w-full mx-auto" />
        </div>

        {/* ========================================
            SECCIÓN DECO - HERO DECO
        ======================================== */}
        <LogoBackground position="right" logoOpacity={1} logoSize={300} verticalPosition={4400} />

        <PointBackground position="right" logoOpacity={1} logoSize={90} verticalPosition={5200} />

        <PatronBackground position="right" logoOpacity={0.2} logoSize={1200} verticalPosition={6800} />
        <LogoBackground position="right" logoOpacity={1} logoSize={200} verticalPosition={7400} />

        {/* FEATURE - Multi-Cloud & On-Premises Support */}
        <div className="feature-section">
          <div className="feature-content">
            <div className="feature-title feature-title_espe">
              <p className="feature-highlight-blue">Self-hosted Anywhere</p>
            </div>
            <div className="feature-description">
              <p>Install it in a kubernetes cluster
                 using any cloud provider or on-premises infrastructure,
                 you can also run it using simply using docker compose
              </p>
            </div>
            <a
              className="header-button"
              href="https://docs.terrakube.io/getting-started/deployment/minikube-+-https"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quick deployment
            </a>
          </div>
          <div className="feature-image">
            <Image
              className="logo"
              src="/workspaces.png"
              alt="deployment logo"
              width={800}
              height={450}
              priority
            />
          </div>
        </div>

        <hr className="border-t-2 border-gray-300 w-[300px] mx-auto my-40" />

        {/* ========================================
            SECCIÓN TRUSTED BY - TRUSTED BY SECTION
        ======================================== */}
        <div className="section-header">
          <div className="section-title">
            <p>Trusted by Open Source Supporters</p>
          </div>
          <p className="feature-description ">Thanks to the following organizations for supporting us with free licenses and services.</p>
        </div>

        {/* SPONSORS LOGOS */}
        <div className="sponsors-ribbon">
          <div className="sponsors-container">
            <div>
              <Image
                src="/jetbrains.png"
                alt="jetbrains logo"
                width={155}
                height={33}
                priority
              />
            </div>
            <div>
              <Image
                src="/gitbook.png"
                alt="gitbook logo"
                width={155}
                height={33}
                priority
              />
            </div>
            <div>
              <Image
                src="/docker.png"
                alt="docker logo"
                width={155}
                height={33}
                priority
              />
            </div>
            <div>
              <Image
                src="/tuta.png"
                alt="tuta logo"
                width={120}
                height={31}
                priority
              />
            </div>
          </div>
        </div>

        {/* ========================================
            SECCIÓN DECO - HERO DECO
        ======================================== */}
        <LogoBackground position="left" logoOpacity={1} logoSize={400} verticalPosition={8000} />

        <PatronBackground position="left" logoOpacity={0.2} logoSize={1500} verticalPosition={8000} />

        {/* ========================================
            SECCIÓN SUPPORT THE PROJECT - SUPPORT SECTION
        ======================================== */}
        <div className="section-header">
          <div className="section-title">
            <p>Support the Project</p>
          </div>
          <div className="section-heade-sub">
            <p className="feature-description">Terrakube is powered by the community. If you believe in open source infrastructure automation and collaboration software, consider sponsoring us.</p>
          </div>
        </div>

        {/* SUPPORT BUTTONS */}
        <div className="support-buttons-container">
          <a
            className="support-button"
            href="https://github.com/sponsors/terrakube-io"
            target="_blank"
            rel="noopener noreferrer"
          >
            💖 Sponsor us on GitHub
          </a>
          <a
            className="support-button"
            href="https://opencollective.com/terrakube"
            target="_blank"
            rel="noopener noreferrer"
          >
            🌐 Terrakube on Open Collective
          </a>
          <a
            className="support-button"
            href="mailto:sponsor@terrakube.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            📬 mail: sponsor@terrakube.io
          </a>
        </div>

        <hr className="border-t-2 border-gray-300  w-[200px] mx-auto my-20" />

        <LogoBackground position="right" logoOpacity={1} logoSize={200} verticalPosition={8600} />

        {/* ========================================
            SECCIÓN JOIN COMMUNITY - COMMUNITY SECTION
        ======================================== */}
        <div className="community-section">
          <div className="community-content-wrapper">
            <div className="community-left-content">
              <p>Join Our <span className="community-highlight">Community</span></p>
              <p>Whether you&apos;re fixing bugs, adding features, improving docs, or providing feedback, your input makes a difference. Lets make Terrakube great together</p>
              <a className="header-button" href="https://join.slack.com/t/terrakubeworkspace/shared_invite/zt-2cx6yn95t-2CTBGvsQhBQJ5bfbG4peFg"
                target="_blank" rel="noopener noreferrer">
                <Image src="/slack.png" alt="Slack" width={20} height={20} />
                Join our Slack</a>
            </div>
            <div className="community-right-content">
              <h3>Get Involved</h3>
              <ul className="community-benefits-list">
                <li>Join GitHub discussions to share ideas</li>
                <li>Open issues for bugs or feature suggestions</li>
                <li>Participate in our slack community</li>
                <li>Test deployment in different cloud providers</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}