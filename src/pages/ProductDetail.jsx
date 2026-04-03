import { useParams, Link } from 'react-router-dom'
import { getProductById } from '../data/products'
import './ProductDetail.css'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)

  if (!product) {
    return (
      <main className="product-detail page">
        <div className="container">
          <p className="product-detail__not-found">Product not found.</p>
          <Link to="/collection" className="btn">Back to Collection</Link>
        </div>
      </main>
    )
  }

  const { name, tagline, description, price, image, notes } = product

  return (
    <main className="product-detail page">
      <div className="container product-detail__container">
        <Link to="/collection" className="product-detail__back btn">
          ← Back to Collection
        </Link>
        <article className="product-detail__card">
          <div className="product-detail__img-wrap">
            <img src={image} alt={name} className="product-detail__img" />
          </div>
          <div className="product-detail__content">
            <p className="product-detail__tagline">{tagline}</p>
            <h1 className="product-detail__name">{name}</h1>
            <p className="product-detail__desc">{description}</p>
            <div className="product-detail__notes">
              <h3>Fragrance Notes</h3>
              <div className="product-detail__notes-grid">
                <div className="product-detail__note">
                  <span className="product-detail__note-label">Top</span>
                  <span className="product-detail__note-value">{notes.top.join(', ')}</span>
                </div>
                <div className="product-detail__note">
                  <span className="product-detail__note-label">Heart</span>
                  <span className="product-detail__note-value">{notes.heart.join(', ')}</span>
                </div>
                <div className="product-detail__note">
                  <span className="product-detail__note-label">Base</span>
                  <span className="product-detail__note-value">{notes.base.join(', ')}</span>
                </div>
              </div>
            </div>
            {/* <p className="product-detail__price">${price}</p> */}
          </div>
        </article>
      </div>
    </main>
  )
}
