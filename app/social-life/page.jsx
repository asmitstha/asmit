import PageWrapper from '@/components/PageWrapper'
import AosInit from '@/components/AosInit'

export const metadata = {
  title: 'Social Life',
}

const col1 = [
  { src: '/assets/img/social/1.jpg', aos: 'fade-down' },
  { src: '/assets/img/social/2.jpg', aos: 'fade-right' },
  { src: '/assets/img/social/3.jpg', aos: 'fade-up' },
]

const col2 = [
  { src: '/assets/img/social/4.jpg', aos: 'fade-down' },
  { src: '/assets/img/social/5.jpg', aos: null },
  { src: '/assets/img/social/6.jpg', aos: 'fade-up' },
]

const col3 = [
  { src: '/assets/img/social/7.jpg', aos: 'fade-down' },
  { src: '/assets/img/social/8.jpg', aos: 'fade-left' },
  { src: '/assets/img/social/9.jpg', aos: 'fade-up' },
]

export default function SocialLife() {
  return (
    <>
      <AosInit />
      <PageWrapper>
        {/* Page header */}
        <div className="social-header">
          <div className="container">
            <p className="page-eyebrow">Personal</p>
            <h1 className="page-title">
              Beyond
              <em>The Screen</em>
            </h1>
            <p className="social-intro">
              Here are some of my best memories. I love travelling, making new friends,
              and most importantly — making memories wherever I go.
            </p>
          </div>
        </div>

        {/* Photo grid */}
        <section className="social-section">
          <div className="container">
            <div className="social-grid">
              <div className="social-col">
                {col1.map((img) => (
                  <div key={img.src} className="social-img-wrap" data-aos={img.aos || undefined}>
                    <img src={img.src} alt="" loading="lazy" />
                  </div>
                ))}
              </div>
              <div className="social-col">
                {col2.map((img) => (
                  <div key={img.src} className="social-img-wrap" data-aos={img.aos || undefined}>
                    <img src={img.src} alt="" loading="lazy" />
                  </div>
                ))}
              </div>
              <div className="social-col">
                {col3.map((img) => (
                  <div key={img.src} className="social-img-wrap" data-aos={img.aos || undefined}>
                    <img src={img.src} alt="" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </PageWrapper>
    </>
  )
}
