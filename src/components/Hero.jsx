import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <img
          src="https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1920&q=85"
          alt="Snahrjs sacred fragrance"
          className="hero__img"
        />
        <div className="hero__overlay" />
      </div>
      <div className="hero__content container">
        <p className="hero__label fade-in-up">Sacred Scents</p>
        <h1 className="hero__title fade-in-up" style={{ animationDelay: '0.1s' }}>
          SNAHRJS
        </h1>
        <p className="hero__tagline fade-in-up" style={{ animationDelay: '0.2s' }}>
          Fragrances for Inner Light & Ritual
        </p>
        <Link
          to="/collection"
          className="btn btn--filled hero__cta fade-in-up"
          style={{ animationDelay: '0.35s' }}
        >
          Explore Collection
        </Link>
      </div>
      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-line" />
      </div>
    </section>
  )
}
