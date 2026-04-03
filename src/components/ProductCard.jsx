import { Link } from 'react-router-dom'
import './ProductCard.css'

export default function ProductCard({ product }) {
  const { id, name, tagline, description, price, image } = product

  return (
    <article className="product-card">
      <Link to={`/collection/${id}`} className="product-card__link">
        <div className="product-card__img-wrap">
          <img src={image} alt={name} className="product-card__img" loading="lazy" />
          {/* <span className="product-card__price">${price}</span> */}
        </div>
        <div className="product-card__body">
          <h3 className="product-card__name">{name}</h3>
          <p className="product-card__tagline">{tagline}</p>
          <p className="product-card__desc">{description}</p>
        </div>
      </Link>
    </article>
  )
}
