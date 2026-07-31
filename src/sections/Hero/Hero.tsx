import { Check, ArrowRight, MessageCircle } from 'lucide-react'
import { heroData } from '../../data/hero'
import heroImg from '../../assets/images/Hero copy.png'
import Button from '../../components/common/Button/Button'
import Container from '../../components/common/Container/Container'
import './Hero.css'

export default function HeroPage() {
    return (
        <section className="hero">
            <Container className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Authentic <span className="highlight">Ayurvedic</span><br />
                        Treatment in Kerala
                    </h1>
                    <p className="hero-description">{heroData.description}</p>
                    
                    <ul className="hero-features">
                        {heroData.features.map((feature) => (
                            <li key={feature} className="feature-item">
                                <span className="check-icon"><Check size={14} /></span>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="hero-actions">
                        <Button variant="primary" size="lg">
                            Book Consultation <ArrowRight size={16} style={{ marginLeft: 6 }} />
                        </Button>
                        <Button variant="secondary" size="lg">
                            <MessageCircle size={16} style={{ marginRight: 6 }} /> WhatsApp Us
                        </Button>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    <img src={heroImg} alt="Kerala Ayurveda Treatment" className="hero-img" />
                </div>
            </Container>

            <div className="hero-stats-band">
                <Container className="hero-stats-container">
                    {heroData.stats.map((stat) => (
                        <div key={stat.label} className="stat-item">
                            <h2 className="stat-value">{stat.value}</h2>
                            <p className="stat-label">{stat.label}</p>
                        </div>
                    ))}
                </Container>
            </div>
        </section>
    )
}