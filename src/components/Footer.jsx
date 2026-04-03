import { Link } from 'react-router-dom'
import './Footer.css'

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/snajhrs?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', icon: 'ig' },
  { label: 'Facebook', href: 'https://facebook.com', icon: 'fb' },
  { label: 'Pinterest', href: 'https://pinterest.com', icon: 'pin' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">SNAHRJS</Link>
          <p className="footer__tagline">Sacred Fragrances for Inner Light & Ritual</p>
        </div>
        <div className="footer__links">
          <Link to="/collection">Collection</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="footer__social">
          {socialLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label={label}
            >
              {label}
            </a>
          ))}
        </div>
        <div className="footer__contact">
          <a href="mailto:hello@snahrjs.com">snajhrsenterprises@gmail.com</a>
        </div>
        <p className="footer__copy">
          © {new Date().getFullYear()} Snahrjs. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
