import './About.css'

export default function About() {
  return (
    <main className="about page">
      <section className="about__hero section">
        <div className="container">
          <p className="section__label">Our Path</p>
          <h1 className="about__title">Snahrjs</h1>
          <p className="about__tagline">Sacred Fragrances for Inner Light & Ritual</p>
        </div>
      </section>
      <section className="about__content section">
        <div className="container about__container">
          <div className="about__block">
            <h2>Our Story</h2>
            <p>
              Snahrjs was born from a belief that scent can be a bridge to the sacred. We create fragrances for meditation, ritual, and daily mindfulness—each blend chosen to ground, elevate, or open the heart. Our oils and essences are selected with intention, honouring traditions where fragrance has always been part of spiritual practice.
            </p>
          </div>
          <div className="about__block">
            <h2>Our Vision</h2>
            <p>
              To be the fragrance house that supports inner work and outer presence. We imagine a world where everyday rituals—morning stillness, evening reflection, moments of pause—are deepened by scents that feel both ancient and alive. Quality and intention come first; we source with reverence and craft with care.
            </p>
          </div>
          <div className="about__block">
            <h2>Our Mission</h2>
            <p>
              We are committed to natural and noble ingredients, transparent sourcing, and bottles that feel sacred in the hand. No shortcuts, no compromise—only fragrances that serve your practice, whether that is meditation, yoga, prayer, or simply a more conscious way of moving through the day.
            </p>
          </div>
          <div className="about__positioning">
            <p className="about__positioning-text">
              Sacred. Intentional. Rooted in spirit.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
