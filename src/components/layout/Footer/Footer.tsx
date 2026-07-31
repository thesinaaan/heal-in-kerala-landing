import { Leaf } from 'lucide-react'
import Container from '../../common/Container/Container'
import { footerData } from '../../../data/footer'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <Container className="footer-container">
        <div className="footer-brand">
          <Leaf size={16} color="#7ec142" />
          <span>Heal in Kerala</span>
        </div>

        <p className="footer-copyright">{footerData.copyright}</p>

        <ul className="footer-links">
          {footerData.links.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  )
}
