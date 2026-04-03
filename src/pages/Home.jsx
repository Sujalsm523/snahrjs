import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import './Home.css'

const featuredProducts = products.filter((p) => p.featured).slice(0, 6)

export default function Home() {
  return (
    <main className="home">
      <Hero />
      <section className="featured section">
        <div className="container">
          <p className="section__label">Sacred Selection</p>
          <h2 className="section__title">Fragrances for Ritual</h2>
          <div className="featured__grid">
            {featuredProducts.map((product, i) => (
              <div
                key={product.id}
                className="featured__item fade-in-up"
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="featured__cta">
            <Link to="/collection" className="btn">
              View Full Collection
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
