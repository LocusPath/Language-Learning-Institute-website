import React from 'react';
import { Compass, BookOpen, Star } from 'lucide-react';

export default function Hero({ onExploreCourses, onStartQuiz }) {
  return (
    <section style={styles.hero} className="animate-fade-up">
      <div className="container" style={styles.heroGrid}>
        
        {/* Hero Left Content */}
        <div style={styles.heroContent}>
          <div style={styles.badge}>
            <span style={styles.badgeStar}><Star size={12} fill="var(--color-accent)" stroke="none" /> 4.9 Google Rated</span>
            <span style={styles.badgeSeparator}>|</span>
            <span>150 Student Reviews</span>
          </div>

          <h1 style={styles.title}>
            Master foreign languages. <br />
            <span className="serif-italic" style={styles.titleItalic}>Open doors to the world.</span>
          </h1>

          <p style={styles.description}>
            Locuspath Learning Services provides premier linguistic training in Japanese, Spanish, English, and other global languages. Located in the heart of the city, we blend professional curriculum with a warm, supportive atmosphere.
          </p>

          <div style={styles.actions}>
            <button 
              className="btn btn-primary" 
              onClick={onExploreCourses}
              style={styles.actionBtn}
            >
              <BookOpen size={16} style={{ marginRight: '8px' }} /> Explore Courses
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={onStartQuiz}
              style={styles.actionBtn}
            >
              <Compass size={16} style={{ marginRight: '8px' }} /> Find Your Level
            </button>
          </div>

          <div style={styles.features}>
            <div style={styles.featureItem}>
              <span style={styles.featureTitle}>B1 & Beyond</span>
              <span style={styles.featureText}>Comprehensive level preparation</span>
            </div>
            <div style={styles.featureItem}>
              <span style={styles.featureTitle}>Expert Tutors</span>
              <span style={styles.featureText}>Industrial-grade curriculum</span>
            </div>
            <div style={styles.featureItem}>
              <span style={styles.featureTitle}>Metro Connected</span>
              <span style={styles.featureText}>2 mins walk from Central Metro Gate 2</span>
            </div>
          </div>
        </div>

        {/* Hero Right Media */}
        <div style={styles.heroMedia}>
          <div className="image-offset-wrapper" style={{ width: '90%', margin: '0 auto' }}>
            <div className="image-offset-frame" />
            <div className="image-offset-content" style={styles.mainPlaceholder}>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                alt="Locuspath Campus Life" 
                style={styles.heroImage}
              />
              <div style={styles.imageOverlay}>
                <span style={styles.overlayText}>Locuspath Learning Campus</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

const styles = {
  hero: {
    padding: '6rem 0 7rem 0',
    background: 'var(--gradient-hero)',
    borderBottom: '1px solid var(--color-border)',
  },
  heroGrid: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: '4rem',
    alignItems: 'center',
  },
  heroContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    color: 'var(--color-text-muted)',
    marginBottom: '1.5rem',
    gap: '0.5rem',
  },
  badgeStar: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontWeight: '600',
    color: 'var(--color-text)',
  },
  badgeSeparator: {
    color: 'var(--color-border-hover)',
  },
  title: {
    fontSize: '3.8rem',
    fontWeight: '400',
    letterSpacing: '-0.02em',
    color: 'var(--color-text)',
    marginBottom: '1.5rem',
    lineHeight: '1.15',
  },
  titleItalic: {
    color: 'var(--color-accent)',
  },
  description: {
    fontSize: '1.05rem',
    color: 'var(--color-text-muted)',
    lineHeight: '1.7',
    marginBottom: '2.5rem',
    maxWidth: '540px',
  },
  actions: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '3.5rem',
  },
  actionBtn: {
    whiteSpace: 'nowrap',
  },
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.5rem',
    borderTop: '1px solid var(--color-border)',
    paddingTop: '2rem',
  },
  featureItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  featureTitle: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.2rem',
    color: 'var(--color-text)',
    fontWeight: '500',
    marginBottom: '0.25rem',
  },
  featureText: {
    fontSize: '0.75rem',
    color: 'var(--color-text-muted)',
    lineHeight: '1.4',
  },
  heroMedia: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainPlaceholder: {
    width: '100%',
    height: '450px',
    borderRadius: '4px',
    border: '1px solid var(--color-border)',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-md)',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    transition: 'var(--transition-editorial)',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    background: 'linear-gradient(to top, rgba(44, 37, 34, 0.85), rgba(44, 37, 34, 0))',
    padding: '2rem 1.5rem 1.5rem 1.5rem',
    display: 'flex',
    alignItems: 'flex-end',
  },
  overlayText: {
    color: 'var(--color-white)',
    fontFamily: 'var(--font-serif)',
    fontSize: '1.25rem',
    fontWeight: '500',
    letterSpacing: '0.05em',
  }
};

// CSS Injection for Responsive Hero
const styleTag = document.createElement('style');
styleTag.innerHTML = `
  @media (max-width: 992px) {
    #root section {
      padding: 4rem 0 !important;
    }
  }
  @media (max-width: 768px) {
    #root section > div {
      grid-template-columns: 1fr !important;
      gap: 2.5rem !important;
    }
    #root h1 {
      font-size: 2.6rem !important;
    }
    #root .btn {
      width: 100%;
    }
    #root div[style*="actions"] {
      flex-direction: column;
      gap: 0.75rem;
      margin-bottom: 2rem !important;
    }
    #root div[style*="features"] {
      grid-template-columns: 1fr !important;
      gap: 1rem !important;
    }
    #root div[style*="mainPlaceholder"] {
      height: 300px !important;
    }
  }
`;
document.head.appendChild(styleTag);
