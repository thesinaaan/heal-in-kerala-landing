import './Header.css'

export default function Header() {
  const navlinks = [
    { label: "Home", href: "#" },
    { label: "Treatments", href: "#" },
    { label: "Therapies", href: "#" },
    { label: "Doctors", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" }
  ]

  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo">Heal in Kerala</a>
        <nav className="nav">
          <ul className="nav-list">
            {navlinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          <a href="/" className="call-btn">Call Us</a>
          <button className="book-btn">Book Consultation</button>
        </div>
      </div>
    </header>
  )
}