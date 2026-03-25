import PageWrapper from '@/components/PageWrapper'

export const metadata = {
  title: 'Portfolio',
}

const projects = [
  {
    name: 'Veriwise',
    img: '/assets/img/veriwise.png',
    pdf: '/assets/img/veriwise.pdf',
  },
  {
    name: 'Web Networks',
    img: '/assets/img/web-networks.png',
    pdf: '/assets/img/web-networks-pdf.pdf',
  },
  {
    name: 'Laakhe',
    img: '/assets/img/laakhe.png',
    pdf: '/assets/img/laakhe-pdf.pdf',
  },
  {
    name: 'Dashboard',
    img: '/assets/img/dashboard.jpg',
    pdf: '/assets/img/Dashboard-pdf.pdf',
  },
  {
    name: 'MK Architect',
    img: '/assets/img/mkarchitect.png',
    pdf: '/assets/img/mk-pdf.pdf',
  },
  {
    name: 'Najik',
    img: '/assets/img/najik.png',
    pdf: '/assets/img/najik-pdf.pdf',
  },
  {
    name: 'Doko',
    img: '/assets/img/doko.png',
    pdf: '/assets/img/doko-pdf.pdf',
  },
]

export default function Portfolio() {
  return (
    <PageWrapper>
      {/* Page header */}
      <div className="page-header">
        <div className="container">
          <div className="page-header-inner">
            <div>
              <p className="page-eyebrow">Selected Work</p>
              <h1 className="page-title">
                Portfolio
                <em>Case Studies</em>
              </h1>
            </div>
            <div className="page-meta">
              <p className="page-count">0{projects.length} Projects</p>
              <p className="page-count">UI / UX / Graphic</p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="portfolio-section">
        <div className="container">
          <div className="portfolio-grid">
            {projects.map((project, i) => (
              <a
                key={project.name}
                href={project.pdf}
                target="_blank"
                rel="noreferrer"
                className="portfolio-item"
                aria-label={`View ${project.name} case study`}
              >
                <div
                  className="portfolio-item-bg"
                  style={{ backgroundImage: `url('${project.img}')` }}
                />
                <div className="portfolio-item-static">{project.name}</div>
                <div className="portfolio-item-info">
                  <span className="portfolio-item-num">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="portfolio-item-name">{project.name}</h2>
                  <span className="portfolio-item-cta">
                    View Case Study &rarr;
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
