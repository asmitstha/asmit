import PageWrapper from '@/components/PageWrapper'
import StarCanvas from '@/components/StarCanvas'
import AosInit from '@/components/AosInit'

export const metadata = {
  title: 'Asmit Shrestha — Web Designer',
}

export default function Home() {
  return (
    <>
      <StarCanvas />
      <AosInit />
      <PageWrapper>
        <section className="hero">
          <div className="container">
            <div className="hero-grid">

              {/* ── Left: Code-tag biography ── */}
              <div>
                <div className="avail-badge">
                  <span className="avail-dot" />
                  Available for opportunities
                </div>

                <div className="code-bio">
                  <div className="code-line">
                    <span className="code-tag open">&lt;html&gt;</span>
                  </div>
                  <div className="code-line ci1">
                    <span className="code-tag open">&lt;body&gt;</span>
                  </div>
                  <div className="code-line ci2">
                    <span className="code-tag open">&lt;Info&gt;</span>
                  </div>
                  <div className="code-line ci3">
                    <div>
                      <h1 className="hero-name">Asmit Shrestha</h1>
                      <p className="hero-role">Web Designer</p>
                    </div>
                  </div>
                  <div className="code-line ci2">
                    <span className="code-tag close">&lt;/Info&gt;</span>
                  </div>

                  <div className="code-line ci2">
                    <span className="code-tag open">&lt;Intro&gt;</span>
                  </div>
                  <div className="code-line ci3">
                    <p className="hero-bio">
                      I love making user-friendly and usable designs. I also do graphic design
                      &amp; front-end development. My hobby includes chilling with friends,
                      watching anime and playing games. One of the coolest things I&apos;ve
                      done is being myself.
                    </p>
                  </div>
                  <div className="code-line ci2">
                    <span className="code-tag close">&lt;/Intro&gt;</span>
                  </div>

                  <div className="code-line ci2">
                    <span className="code-tag open">&lt;contact&gt;</span>
                  </div>
                  <div className="code-line ci3">
                    <div className="hero-contact">
                      <a href="mailto:asmitshrestha43@gmail.com">
                        asmitshrestha43@gmail.com
                      </a>
                      <a href="tel:+9779860317560">+977 9860 317 560</a>
                    </div>
                  </div>
                  <div className="code-line ci2">
                    <span className="code-tag close">&lt;/contact&gt;</span>
                  </div>

                  <div className="code-line ci1">
                    <span className="code-tag close">&lt;/body&gt;</span>
                  </div>
                  <div className="code-line">
                    <span className="code-tag close">&lt;/html&gt;</span>
                  </div>
                </div>

                <div className="hero-cta">
                  <a href="/portfolio" className="btn-primary">
                    View Work &rarr;
                  </a>
                  <a href="mailto:asmitshrestha43@gmail.com" className="btn-outline">
                    Get in Touch
                  </a>
                </div>
              </div>

              {/* ── Right: Illustration ── */}
              <div className="hero-visual">
                <img src="/assets/img/asmit.svg" alt="Asmit Shrestha illustration" />
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="scroll-hint" aria-hidden="true">
            <span className="scroll-hint-label">Scroll</span>
            <div className="scroll-line" />
          </div>
        </section>

        <footer className="home-footer">
          <div className="container">
            <div className="home-footer-inner">
              <span className="footer-copy">&copy; 2025 Asmit Shrestha</span>
              <div className="footer-skills">
                <span>UI Design</span>
                <span className="sep">/</span>
                <span>Web Design</span>
                <span className="sep">/</span>
                <span>Front-end Dev</span>
                <span className="sep">/</span>
                <span>Graphic Design</span>
              </div>
              <span className="footer-copy">Made with &hearts; in Nepal</span>
            </div>
          </div>
        </footer>
      </PageWrapper>
    </>
  )
}
