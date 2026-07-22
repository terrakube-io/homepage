import Image from "next/image";

const sponsors = [
  { src: "/jetbrains.png", alt: "JetBrains", width: 145, height: 31 },
  { src: "/gitbook.png", alt: "GitBook", width: 145, height: 31 },
  { src: "/docker.png", alt: "Docker", width: 145, height: 37 },
  { src: "/tuta.png", alt: "Tuta", width: 112, height: 40 },
];

export default function Sponsors() {
  return (
    <section className="sponsors-section">
      <div className="container-shell section-wrap">
        <div className="section-heading reveal">
          <p className="eyebrow">Open source, supported</p>
          <h2>Backed by teams who believe in open tools.</h2>
          <p>
            We are grateful to the organizations that support Terrakube with licenses and
            services for the community.
          </p>
        </div>

        <div className="sponsor-strip reveal">
          {sponsors.map((sponsor) => (
            <div key={sponsor.src} className="sponsor-cell">
              <Image
                src={sponsor.src}
                alt={sponsor.alt}
                width={sponsor.width}
                height={sponsor.height}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
