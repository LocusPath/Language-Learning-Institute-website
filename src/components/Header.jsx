import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';

export default function Header({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'courses', label: 'Courses' },
    { id: 'quiz', label: 'Placement Quiz' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Book Trial' }
  ];

  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header style={styles.header}>
      <div className="container" style={styles.container}>
        {/* Brand Identity */}
        <div style={styles.logoContainer} onClick={() => handleNavClick('home')}>
          <div style={styles.logoMain}>
            LOCUSPATH <span style={styles.logoSubtext}>LEARNING</span>
          </div>
          <div style={styles.logoHindi}>Servicios de Aprendizaje</div>
        </div>

        {/* Desktop Navigation */}
        <nav style={styles.desktopNav}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                ...styles.navLink,
                color: activeTab === item.id ? 'var(--color-accent)' : 'var(--color-text)',
                borderBottom: activeTab === item.id ? '1px solid var(--color-accent)' : '1px solid transparent'
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div style={styles.ctaContainer}>
          <button 
            className="btn btn-primary" 
            style={styles.ctaButton}
            onClick={() => handleNavClick('contact')}
          >
            Trial Class
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          style={styles.mobileMenuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={styles.mobileDrawer}>
          <nav style={styles.mobileNav}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  ...styles.mobileNavLink,
                  color: activeTab === item.id ? 'var(--color-accent)' : 'var(--color-text)',
                  backgroundColor: activeTab === item.id ? 'var(--color-bg-alt)' : 'transparent'
                }}
              >
                {item.label}
              </button>
            ))}
            <button 
              className="btn btn-primary" 
              style={{ marginTop: '1.5rem', width: '100%' }}
              onClick={() => handleNavClick('contact')}
            >
              Book Free Trial
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

const styles = {
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    borderBottom: '1px solid var(--color-border)',
    backdropFilter: 'blur(8px)',
    backgroundColor: 'rgba(254, 253, 250, 0.95)',
    borderTop: '4px solid transparent',
    borderImage: 'linear-gradient(to right, var(--color-accent), var(--color-sage), var(--color-teal), #c05c6d) 1',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '90px',
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
  },
  logoMain: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.3rem',
    fontWeight: '600',
    letterSpacing: '0.08em',
    lineHeight: '1.1',
  },
  logoSubtext: {
    fontSize: '0.9rem',
    fontWeight: '300',
    fontFamily: 'var(--font-sans)',
  },
  logoHindi: {
    fontSize: '0.65rem',
    letterSpacing: '0.05em',
    color: 'var(--color-text-muted)',
    marginTop: '2px',
    fontWeight: '500',
  },
  desktopNav: {
    display: 'flex',
    gap: '2rem',
  },
  navLink: {
    background: 'none',
    border: 'none',
    padding: '0.5rem 0',
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    cursor: 'pointer',
    fontFamily: 'var(--font-sans)',
    fontWeight: '500',
    transition: 'var(--transition-editorial)',
  },
  ctaContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  ctaButton: {
    fontSize: '0.8rem',
    padding: '0.6rem 1.25rem',
  },
  mobileMenuButton: {
    display: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: 'var(--color-text)',
  },
  mobileDrawer: {
    position: 'absolute',
    top: '90px',
    left: 0,
    width: '100%',
    backgroundColor: 'var(--color-bg)',
    borderBottom: '1px solid var(--color-border)',
    boxShadow: 'var(--shadow-md)',
    padding: '1.5rem 2rem 2.5rem 2rem',
  },
  mobileNav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  mobileNavLink: {
    background: 'none',
    border: 'none',
    textAlign: 'left',
    padding: '0.75rem 1rem',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    cursor: 'pointer',
    fontWeight: '500',
    width: '100%',
    borderRadius: '4px',
    transition: 'var(--transition-editorial)',
  },
  // Responsive overrides are handled dynamically or by media queries in CSS
};

// CSS injection for responsive display
const styleTag = document.createElement('style');
styleTag.innerHTML = `
  @media (max-width: 992px) {
    header nav, header .btn-primary {
      display: none !important;
    }
    header button[aria-label="Toggle menu"] {
      display: block !important;
    }
  }
`;
document.head.appendChild(styleTag);
