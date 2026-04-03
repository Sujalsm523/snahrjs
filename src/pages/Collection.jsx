import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import './Collection.css'

export default function Collection() {
  return (
    <main className="collection page">
      <section className="collection__head section">
        <div className="container">
          <p className="section__label">Sacred Scents</p>
          <h1 className="collection__title">The Collection</h1>
          <p className="collection__intro">
            Blends for ritual and presence—each crafted with intention for meditation, grounding, and inner light.
          </p>
        </div>
      </section>
      <section className="collection__grid-wrap section section--top-none">
        <div className="container">
          <div className="collection__grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
