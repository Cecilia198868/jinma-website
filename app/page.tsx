import { readdir } from "node:fs/promises";
import path from "node:path";

const HERO_HIGHLIGHTS = [
  "Established in 2004",
  "Annual Capacity: 4,500 tons",
  "Factory Area: 30,000+ m²",
  "Product Qualification Rate: 98%+",
];

const PRODUCT_CARDS = [
  "AGM separators for VRLA batteries",
  "AGM separators for start-stop battery systems",
  "Customized separator materials for lead-acid battery manufacturers",
];

const CAPABILITIES = [
  "Industrial-scale AGM separator production",
  "Annual production capacity of approximately 4,500 tons",
  "Digital production control",
  "Process optimization",
  "Stable quality management",
  "Product qualification rate above 98%",
  "Premium product rate above 95%",
];

const CERTIFICATIONS = [
  {
    title: "ISO 9001:2015 Quality Management System",
    number: "USA24Q40542R0S",
    scope: "Production of AGM separators",
    validUntil: "2027-02-18",
  },
  {
    title: "ISO 14001:2015 Environmental Management System",
    number: "USA24E40543R0S",
    scope: "AGM separator production and related environmental management activities",
    validUntil: "2027-02-18",
  },
  {
    title: "ISO 45001:2018 Occupational Health & Safety Management System",
    number: "USA24S20544R0S",
    scope: "AGM separator production and related occupational health and safety activities",
    validUntil: "2027-02-18",
  },
  {
    title: "High-Tech Enterprise Certificate 2020",
    number: "GR202036000316",
  },
  {
    title: "High-Tech Enterprise Certificate 2024",
    number: "GR202436001705",
  },
];

const AWARDS = [
  {
    title: "2026 Global Recognition Award Winner",
    image: "/awards/global-recognition-award-2026.png",
    body: "Lin Liang received the 2026 Global Recognition Award for exceptional contributions to AGM separator technology, industrial innovation, and advanced energy storage materials engineering.",
    extra:
      "The award recognized Lin Liang’s ability to bridge laboratory research and scalable industrial manufacturing, delivering measurable improvements in battery safety, lifecycle performance, thermal stability, and electrolyte management.",
  },
  {
    title: "Industry Eagles Awards 2026 Finalist",
    image: "/awards/Business Change and Transformation Excellence.png",
    body: "Jiangxi Jinma Advanced Separator Technology Co., Ltd. was selected as a finalist in the 2026 Industry Eagles Awards for innovation and manufacturing excellence in AGM battery separator technology.",
  },
  {
    title: "Technology Innovation of the Year – Finalist",
    image: "/awards/Technology Innovation of the Year-finalist-2026.png",
    body: "Finalist recognition for Advanced AGM Separator Technology for High-Reliability Lead-Acid Batteries.",
  },
  {
    title: "Business Change and Transformation Excellence – Finalist",
    image: "/awards/Business Change and Transformation Excellence-finalist-2026.png",
    body: "Finalist recognition for business change, transformation, and industrial innovation.",
  },
  {
    title: "Best New Product/Service Launch – Finalist",
    image: "/awards/Best New ProductService Launch-finalist-2026.png",
    body: "Finalist recognition for Jinma Advanced AGM Battery Separator for High-Performance Lead-Acid Batteries.",
  },
  {
    title: "Jiangxi Specialized and Innovative SME Recognition 2021",
    body: "Recognized by Jiangxi Provincial Department of Industry and Information Technology.",
  },
  {
    title: "Jiangxi Specialized and Innovative SME Recognition 2024",
    body: "Recognized as a 2024 Jiangxi Specialized and Innovative SME, valid from August 2024 to August 2027.",
  },
  {
    title: "Leoch Excellence Quality Award 2023",
    body: "Awarded by Leoch International Technology Co., Ltd. for quality excellence.",
  },
  {
    title: "Excellent Supplier Award – KAMISAFE",
    body: "Supplier recognition awarded by Shenzhen Kangming Sheng Industrial Co., Ltd.",
  },
  {
    title: "Excellent Supplier Award – Leoch Battery",
    body: "Supplier recognition awarded by Leoch Battery.",
  },
];

const PATENTS = [
  "AGM separator drying box",
  "AGM separator acid separation device",
  "AGM separator bending resistance testing equipment",
  "AGM separator acid absorption testing device",
  "AGM separator slurry drying and forming device",
  "AGM separator cutting inspection device",
  "Anti-adhesion AGM separator drying box",
  "AGM separator pre-pressing mechanism",
  "AGM separator slitting machine limiting mechanism",
  "AGM separator spraying device",
  "AGM separator winding adjustment mechanism",
  "AGM separator slicing machine unloading mechanism",
  "AGM separator cutting positioning mechanism",
  "AGM separator winding equipment",
  "AGM separator winding device with inspection function",
];

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

type GalleryImage = {
  src: string;
  alt: string;
  name: string;
};

async function getGalleryImages(
  folders: { publicPath: string; diskPath: string }[],
  fallbackAlt: string
): Promise<GalleryImage[]> {
  for (const folder of folders) {
    try {
      const absolutePath = path.join(process.cwd(), "public", folder.diskPath);
      const entries = await readdir(absolutePath, { withFileTypes: true });
      const images = entries
        .filter((entry) => entry.isFile())
        .filter((entry) => IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()))
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((entry) => ({
          src: `${folder.publicPath}/${entry.name}`,
          alt: `${fallbackAlt} - ${entry.name}`,
          name: entry.name,
        }));

      if (images.length > 0) {
        return images;
      }
    } catch {
      continue;
    }
  }

  return [];
}

function GallerySection({
  id,
  title,
  subtitle,
  images,
}: {
  id: string;
  title: string;
  subtitle: string;
  images: GalleryImage[];
}) {
  return (
    <section id={id} className="content-section gallery-section">
      <div className="section-inner">
        <div className="section-heading">
          <p className="section-kicker">{title}</p>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        {images.length > 0 ? (
          <div className="gallery-grid">
            {images.map((image) => (
              <figure key={`${id}-${image.name}`} className="gallery-card">
                <div className="gallery-media">
                  <img src={image.src} alt={image.alt} loading="lazy" />
                </div>
              </figure>
            ))}
          </div>
        ) : (
          <div className="gallery-empty">
            <p>
              This gallery is ready. Add images to the linked folder and they will appear
              here automatically.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default async function Home() {
  const [factoryImages, productImages, certificateImages, patentImages] =
    await Promise.all([
      getGalleryImages(
        [{ publicPath: "/factory", diskPath: "factory" }],
        "Factory gallery image"
      ),
      getGalleryImages(
        [{ publicPath: "/products", diskPath: "products" }],
        "Product gallery image"
      ),
      getGalleryImages(
        [
          { publicPath: "/certificates", diskPath: "certificates" },
          { publicPath: "/certificate", diskPath: "certificate" },
        ],
        "Certification gallery image"
      ),
      getGalleryImages(
        [
          { publicPath: "/patents", diskPath: "patents" },
          { publicPath: "/patent", diskPath: "patent" },
        ],
        "Patent gallery image"
      ),
    ]);

  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="section-inner header-inner">
          <a href="#top" className="brand-block" aria-label="KINGMA VAGEN home">
            <span className="brand-mark">KINGMA VAGEN</span>
            <span className="brand-subtitle">
              Jiangxi Jinma Advanced Separator Technology Co., Ltd.
            </span>
            <span className="brand-subtitle">AGM Separator Materials</span>
          </a>

          <nav className="site-nav" aria-label="Primary">
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#quality">Quality</a>
            <a href="#awards">Awards</a>
            <a href="#patents">Patents</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section id="top" className="hero-section">
        <div className="section-inner hero-grid">
          <div className="hero-copy">
            <p className="section-kicker">Advanced AGM Separator Manufacturing</p>
            <h1>
              Advanced AGM Separator Materials for Reliable Lead-Acid Energy Storage
            </h1>
            <p className="hero-text">
              Jiangxi Jinma Advanced Separator Technology Co., Ltd. specializes in AGM
              battery separator manufacturing, process optimization, and quality-controlled
              industrial production for VRLA and lead-acid battery applications.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#contact">
                Contact Jinma
              </a>
              <a className="button-secondary" href="#products">
                View Products
              </a>
            </div>
          </div>

          <div className="hero-panel">
            <ul className="hero-highlights">
              {HERO_HIGHLIGHTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="hero-facts">
              <div>
                <span>Location</span>
                <strong>Ganzhou Economic and Technological Development Zone, Jiangxi, China</strong>
              </div>
              <div>
                <span>Main Product</span>
                <strong>AGM battery separators</strong>
              </div>
              <div>
                <span>Markets</span>
                <strong>China, Indonesia, Bangladesh, Vietnam, and other international markets</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="content-section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="section-kicker">About Us</p>
            <h2>Specialized AGM separator manufacturing with industrial discipline</h2>
          </div>
          <div className="two-column-layout">
            <div className="content-card">
              <p>
                Jiangxi Jinma Advanced Separator Technology Co., Ltd. is a specialized
                manufacturer of absorbent glass mat (AGM) battery separators located in
                Ganzhou Economic and Technological Development Zone, Jiangxi, China. The
                company focuses on AGM separator materials, battery separator production,
                process control, and industrial-scale quality management.
              </p>
              <p>
                The company operates advanced production lines with digital control
                systems and maintains strict quality standards. Its AGM separator products
                serve domestic lead-acid battery manufacturers and international markets
                including Indonesia, Bangladesh, and Vietnam.
              </p>
            </div>
            <div className="stat-grid">
              <div className="stat-card">
                <span>Established</span>
                <strong>2004</strong>
              </div>
              <div className="stat-card">
                <span>Factory</span>
                <strong>47.6 mu / 30,000+ m²</strong>
              </div>
              <div className="stat-card">
                <span>Annual Capacity</span>
                <strong>Approx. 4,500 tons</strong>
              </div>
              <div className="stat-card">
                <span>Employees</span>
                <strong>About 50–70</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="content-section section-toned">
        <div className="section-inner">
          <div className="section-heading">
            <p className="section-kicker">AGM Separator Products</p>
            <h2>Separator materials engineered for VRLA and lead-acid battery systems</h2>
            <p>
              The company manufactures AGM separators for VRLA and lead-acid battery
              applications. Products are available in thicknesses from 0.50 mm to 5.0 mm,
              with customized length and width according to customer requirements.
            </p>
          </div>
          <div className="three-column-grid">
            {PRODUCT_CARDS.map((item) => (
              <article key={item} className="feature-card">
                <h3>{item}</h3>
                <p>
                  Industrial product development focused on consistency, fit-for-use
                  performance, and customer-specific dimensional requirements.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="content-section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="section-kicker">Manufacturing Capabilities</p>
            <h2>Digitally controlled production with quality-focused execution</h2>
          </div>
          <div className="capability-layout">
            <div className="content-card">
              <p>
                Jinma maintains a manufacturing model centered on AGM separator
                specialization, production stability, and process refinement. The factory
                supports industrial-scale output for domestic and international customers
                while maintaining disciplined quality targets.
              </p>
            </div>
            <ul className="capability-list">
              {CAPABILITIES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="quality" className="content-section section-toned">
        <div className="section-inner">
          <div className="section-heading">
            <p className="section-kicker">Quality & Certifications</p>
            <h2>Management systems and qualification credentials supporting production reliability</h2>
          </div>
          <div className="certification-grid">
            {CERTIFICATIONS.map((cert) => (
              <article key={cert.title} className="cert-card">
                <h3>{cert.title}</h3>
                <dl>
                  <div>
                    <dt>Certificate No.</dt>
                    <dd>{cert.number}</dd>
                  </div>
                  {cert.scope ? (
                    <div>
                      <dt>Scope</dt>
                      <dd>{cert.scope}</dd>
                    </div>
                  ) : null}
                  {cert.validUntil ? (
                    <div>
                      <dt>Valid Until</dt>
                      <dd>{cert.validUntil}</dd>
                    </div>
                  ) : null}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="awards" className="content-section awards-section">
        <div className="section-inner">
          <div className="section-heading section-heading-centered">
            <p className="section-kicker">Awards & Recognitions</p>
            <h2>Awards & Recognitions</h2>
            <p>
              International recognition, government honors, and customer awards reflecting
              Jinma’s technical capabilities and manufacturing quality.
            </p>
          </div>

          <div className="awards-list">
            {AWARDS.map((award) => (
              <article key={award.title} className="award-card">
                {award.image ? (
                  <div className="award-image-wrap">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="award-image"
                      loading="lazy"
                    />
                  </div>
                ) : null}
                <div className="award-body">
                  <h3>{award.title}</h3>
                  <p>{award.body}</p>
                  {award.extra ? <p>{award.extra}</p> : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="patents" className="content-section section-toned">
        <div className="section-inner">
          <div className="section-heading">
            <p className="section-kicker">Patents & Innovation</p>
            <h2>Patents & Innovation</h2>
            <p>
              Jinma has developed multiple utility model patents related to AGM separator
              manufacturing, testing, drying, cutting, acid absorption, acid separation,
              and production equipment.
            </p>
          </div>
          <div className="patent-panel">
            <ul className="patent-list">
              {PATENTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="section-kicker">Markets & Customers</p>
            <h2>Domestic supply experience with growing international reach</h2>
            <p>
              Jinma serves domestic lead-acid battery manufacturers and exports to
              international markets including Indonesia, Bangladesh, and Vietnam. The
              company has supplied products to recognized battery manufacturers and
              maintains a market reputation based on stable quality, technical support,
              and cost-effective separator solutions.
            </p>
          </div>
        </div>
      </section>

      <GallerySection
        id="factory-gallery"
        title="Factory Gallery"
        subtitle="Advanced AGM separator production facilities and industrial manufacturing environment."
        images={factoryImages}
      />

      <GallerySection
        id="product-gallery"
        title="Product Gallery"
        subtitle="AGM separator materials and battery separator product solutions."
        images={productImages}
      />

      <GallerySection
        id="certification-gallery"
        title="Certification Gallery"
        subtitle="Quality systems, environmental management, and industry certifications."
        images={certificateImages}
      />

      <GallerySection
        id="patent-gallery"
        title="Patent & Innovation Gallery"
        subtitle="Utility model patents and AGM separator technology innovation."
        images={patentImages}
      />

      <section id="contact" className="content-section contact-section">
        <div className="section-inner contact-layout">
          <div className="section-heading">
            <p className="section-kicker">Contact</p>
            <h2>Jiangxi Jinma Advanced Separator Technology Co., Ltd.</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <span>Address</span>
              <strong>
                No. 105 Huajian North Road, Ganzhou Economic and Technological
                Development Zone, Jiangxi, China
              </strong>
            </div>
            <div className="contact-card">
              <span>Email</span>
              <strong>
                <a href="mailto:linliang1960@gmail.com">linliang1960@gmail.com</a>
              </strong>
            </div>
            <div className="contact-card">
              <span>Technical Director</span>
              <strong>Lin Liang</strong>
              <p>Advanced AGM Battery Technology</p>
            </div>
          </div>
          <div className="image-rules">
            <h3>Image Folder Rules</h3>
            <ul>
              <li>public/awards/ for awards images</li>
              <li>public/factory/ for factory images</li>
              <li>public/certificates/ for certification images</li>
              <li>public/products/ for product images</li>
              <li>public/patents/ for patent images</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
