import { useState } from 'react'
import { Leaf, Phone, Menu, X } from 'lucide-react'
import Button from '../../common/Button/Button'
import Container from '../../common/Container/Container'
import './Header.css'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navlinks = [
    { label: "Home", href: "#" },
    { label: "Treatments", href: "#treatments" },
    { label: "Therapies", href: "#therapies" },
    { label: "Doctors", href: "#doctors" },
    { label: "About Us", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" }
  ]

  return (
    <header className="header">
      <Container className="container">
        <a href="/" className="logo-wrapper">
          <div className="logo-icon"><Leaf size={16} /></div>
          <div className="logo-text">
            <span className="logo-brand">Heal in Kerala</span>
            <span className="logo-tagline">Ayurvedic Wellness</span>
          </div>
        </a>

        <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            {navlinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={() => setMobileMenuOpen(false)}>{link.label}</a>
              </li>
            ))}
          </ul>
          <div className="mobile-nav-cta">
            <Button variant="header" size="md" onClick={() => setMobileMenuOpen(false)}>Book Consultation</Button>
          </div>
        </nav>

        <div className="header-actions">
          <a href="tel:+" className="call-btn">
            <Phone size={14} className="phone-icon" /> Call Us
          </a>
          <Button variant="header" size="md" className="desktop-header-cta">Book Consultation</Button>

          <button
            type="button"
            className={`mobile-menu-btn ${mobileMenuOpen ? 'is-active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>
    </header>
  )
}