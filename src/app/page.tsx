import Image from "next/image";
import LogoBackground from "./LogoBackground";
import PatronBackground from './PatronBackground';
import PointBackground from "./PointBackground";

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
          <a
            className="header-button"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
          <a
            className="header-button"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
          <a
            className="header-button"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Join our Slack
          </a>
        </div>
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
            <p>The open-source platform that helps teams</p>
            <p>manage their cloud infrastructure using</p>
            <p className="hero-highlight-text">Terraform or OpenTofu.</p>
          </div>
          <div className="hero-subtitle">
            <p>No vendor lock-in, No licensing headache, Self Hosted</p>
            <p>anywhere you want from cloud to on premises</p>
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
            <p>Everything you need to collaborate, run and manage your</p>
            <p> cloud infrastructure — fully open source.</p>
          </div>
        </div>

        {/* ========================================
            SECCIONES DE CARACTERÍSTICAS - FEATURE SECTIONS
        ======================================== */}

        {/* FEATURE - Fully Open Source */}
        <div className="feature-section">
          <div className="feature-content">
            <div className="feature-title">
              <p>Fully</p>
              <p className="feature-highlight-blue">Open Source</p>
            </div>
            <div className="feature-description">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sedda eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem
                tempor incididunt ut labore et  magna aliqua.</p>
            </div>
            <a
              className="header-button button-description"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </div>
          <div className="feature-image">
            <Image
              className="logo"
              src="/terrakube.png"
              alt="terrakube logo"
              width={300}
              height={200}
              priority
            />
          </div>
          <hr className="border-t-2 border-gray-300 w-full mt-8" />
        </div>

        {/* FEATURE - Terraform & OpenTofu Support */}
        <div className="feature-section">
          <div className="feature-image">
            <Image
              className="logo-with-background"
              src="/terrakube.png"
              alt="terrakube logo"
              width={300}
              height={200}
              priority
            />
          </div>
          <div className="feature-content">
            <div className="feature-title">
              <p className="feature-highlight-orange">Terraform & OpenTofu</p>
              <p>Support</p>
            </div>
            <div className="feature-description">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.</p>
            </div>
            <a
              className="header-button"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </div>
          <hr className="border-t-2 border-gray-300  w-full mx-auto" />
        </div>

        {/* ========================================
            SECCIÓN DECO - HERO DECO
        ======================================== */}
        <LogoBackground position="left" logoOpacity={1} logoSize={330} verticalPosition={2500} />

        <PointBackground position="left" logoOpacity={1} logoSize={90} verticalPosition={3100} />


        {/* FEATURE - Private Module/Provider Registry */}
        <div className="feature-section">
          <div className="feature-content">
            <div className="feature-title">
              <p>Private</p>
              <p className="feature-highlight-blue feature-title_espe">Module/Provider</p>
              <p>Registry</p>
            </div>
            <div className="feature-description">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.</p>
            </div>
            <a
              className="header-button"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </div>
          <div className="feature-image">
            <Image
              className="logo"
              src="/terrakube.png"
              alt="terrakube logo"
              width={300}
              height={200}
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
              src="/terrakube.png"
              alt="terrakube logo"
              width={300}
              height={200}
              priority
            />
          </div>
          <div className="feature-content">
            <div className="feature-title">
              <p className="feature-highlight-orange">Self-Hosted & Ephemeral</p>
              <p>Agents</p>
            </div>
            <div className="feature-description">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.</p>
            </div>
            <a
              className="header-button"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </div>
          <hr className="border-t-2 border-gray-300  w-full mx-auto" />
        </div>

        {/* FEATURE - Single Sign-On (SSO) */}
        <div className="feature-section">
          <div className="feature-content">
            <div className="feature-title">
              <p>Single Sign-On</p>
              <p className="feature-highlight-blue">(SSO)</p>
            </div>
            <div className="feature-description ulista">
              <ul>
                <li>Azure Entra ID</li>
                <li>Google Cloud Identity</li>
                <li>Amazon Cognito</li>
              </ul>
              <ul>
                <li>GitHub</li>
                <li> Keycloak</li>
                <li> OIDC, SAML, etc.</li>
              </ul>
            </div>
            <a
              className="header-button"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </div>
          <div className="feature-image">
            <Image
              className="logo"
              src="/terrakube.png"
              alt="terrakube logo"
              width={300}
              height={200}
              priority
            />
          </div>
          <hr className="border-t-2 border-gray-300  w-full mx-auto" />
        </div>

        {/* FEATURE - Cloud & Remote Backend Support */}
        <div className="feature-section">
          <div className="feature-image">
            <Image
              className="logo"
              src="/terrakube.png"
              alt="terrakube logo"
              width={300}
              height={200}
              priority
            />
          </div>
          <div className="feature-content">
            <div className="feature-title">
              <p className="feature-highlight-orange_espe">Cloud & Remote</p>
              <p>Backend Support</p>
            </div>
            <div className="feature-description">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.</p>
            </div>
            <a
              className="header-button"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </div>
          <hr className="border-t-2 border-gray-300  w-full mx-auto" />
        </div>

        {/* FEATURE - Role-Based Access Control */}
        <div className="feature-section">
          <div className="feature-content">
            <div className="feature-title">
              <p className="feature-highlight-blue">Role-Based</p>
              <p>Access Control</p>
            </div>
            <div className="feature-description">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.</p>
            </div>
            <a
              className="header-button"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </div>
          <div className="feature-image">
            <Image
              className="logo"
              src="/terrakube.png"
              alt="terrakube logo"
              width={300}
              height={200}
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
              src="/terrakube.png"
              alt="terrakube logo"
              width={300}
              height={200}
              priority
            />
          </div>
          <div className="feature-content">
            <div className="feature-title">
              <p className="feature-highlight-orange">Visual Terraform</p>
              <p>State Viewer</p>
            </div>
            <div className="feature-description">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.</p>
            </div>
            <a
              className="header-button"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </div>
          <hr className="border-t-2 border-gray-300  w-full mx-auto" />
        </div>

        {/* FEATURE - Scheduled Jobs */}
        <div className="feature-section">
          <div className="feature-content">
            <div className="feature-title">
              <p className="feature-highlight-blue">Scheduled</p>
              <p>Jobs</p>
            </div>
            <div className="feature-description">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.</p>
            </div>
            <a
              className="header-button"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </div>
          <div className="feature-image">
            <Image
              className="logo"
              src="/terrakube.png"
              alt="terrakube logo"
              width={300}
              height={200}
              priority
            />
          </div>
          <hr className="border-t-2 border-gray-300  w-full mx-auto" />
        </div>

        {/* ========================================
            SECCIÓN DECO - HERO DECO
        ======================================== */}

        <LogoBackground position="left" logoOpacity={1} logoSize={300} verticalPosition={6000} />

        {/* FEATURE - Dynamic Credentials */}
        <div className="feature-section">
          <div className="feature-image">
            <Image
              className="logo"
              src="/terrakube.png"
              alt="terrakube logo"
              width={300}
              height={200}
              priority
            />
          </div>
          <div className="feature-content">
            <div className="feature-title">
              <p className="feature-highlight-orange">Dynamic</p>
              <p>Credentials</p>
            </div>
            <div className="feature-description">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.</p>
            </div>
            <a
              className="header-button"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </div>
          <hr className="border-t-2 border-gray-300  w-full mx-auto" />
        </div>

        {/* FEATURE - Native VCS Integration */}
        <div className="feature-section">
          <div className="feature-content">
            <div className="feature-title">
              <p className="feature-highlight-blue">Native VCS</p>
              <p>Integration</p>
            </div>
            <div className="feature-description">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.</p>
            </div>
            <a
              className="header-button"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </div>
          <div className="feature-image">
            <Image
              className="logo"
              src="/terrakube.png"
              alt="terrakube logo"
              width={300}
              height={200}
              priority
            />
          </div>
          <hr className="border-t-2 border-gray-300  w-full mx-auto" />
        </div>

        {/* FEATURE - Policy Enforcement with OPA */}
        <div className="feature-section">
          <div className="feature-image">
            <Image
              className="logo"
              src="/terrakube.png"
              alt="terrakube logo"
              width={300}
              height={200}
              priority
            />
          </div>
          <div className="feature-content">
            <div className="feature-title">
              <p>Policy Enforcement</p>
              <p className="feature-highlight-orange">with OPA</p>
            </div>
            <div className="feature-description">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.</p>
            </div>
            <a
              className="header-button"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
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
              <p className="feature-highlight-blue">Multi-Cloud</p>
              <p>& On-Premises Support</p>
            </div>
            <div className="feature-description">
              <p>Runs on any Kubernetes cluster</p>
            </div>
            <a
              className="header-button"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </div>
          <div className="feature-image">
            <Image
              className="logo"
              src="/terrakube.png"
              alt="terrakube logo"
              width={300}
              height={200}
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
          <p className="feature-description ">Thanks to the following organizations for supporting us with free licenses and resources.</p>
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
            <p className="feature-description">Terrakube is powered by the community. If you believe in open source IaC, consider sponsoring us.</p>
          </div>
        </div>

        {/* SUPPORT BUTTONS */}
        <div className="support-buttons-container">
          <a
            className="support-button"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            💖 Sponsor us on GitHub
          </a>
          <a
            className="support-button"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            🌐 Terrakube on Open Collective
          </a>
          <a
            className="support-button"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            📬 Sponsor Email: sponsor@terrakube.io
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
              <p>Whether you&apos;re fixing bugs, adding features, improving docs, or providing feedback, your input makes a difference.</p>
              <a className="header-button" href="#"
                target="_blank" rel="noopener noreferrer">
                <Image src="/slack.png" alt="Slack" width={20} height={20} />
                Join our Slack</a>
            </div>
            <div className="community-right-content">
              <h3>Get Involved</h3>
              <ul className="community-benefits-list">
                <li>Join GitHub discussions to share ideas</li>
                <li>Open issues for bugs or feature suggestions</li>
                <li>Participate in RFC discussions and reviews</li>
                <li>Contribute code after community discussion</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}