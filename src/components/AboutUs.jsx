import React from 'react';
import { Award, ShieldAlert, GraduationCap, MapPin } from 'lucide-react';

export default function AboutUs({ onContactClick }) {
  return (
    <section className="section animate-fade-up" style={styles.section}>
      <div className="container">
        
        {/* Section Header */}
        <div style={styles.sectionHeader}>
          <span style={styles.sectionSub}>Who We Are</span>
          <h2 style={styles.sectionTitle}>About Locuspath Learning Services</h2>
          <p style={styles.sectionIntro}>
            Established with a mission to bridge global cultures, Locuspath Learning Services provides leading-edge foreign language training and academic consultancy.
          </p>
        </div>

        {/* Content Grid */}
        <div className="editorial-grid" style={{ marginBottom: '6rem' }}>
          {/* Left: Brand philosophy statement */}
          <div style={styles.philosophyBlock}>
            <h3 style={styles.philosophyTitle}>
              We believe language is not a subject to study, but <span className="serif-italic" style={{ color: 'var(--color-accent)' }}>a skill to inhabit.</span>
            </h3>
            <p style={styles.philosophyText}>
              Traditional methods focus on rote grammar and textbook translations. At Locuspath, we teach languages naturally. From the very first session, you are encouraged to listen, speak, and engage in dialogues modeled after real-life conversations.
            </p>
            <p style={styles.philosophyText}>
              Whether you are preparing for international certifications like the JLPT (Japanese) or DELE (Spanish), targeting a study visa, or advancing your corporate communication skills, our certified tutors are here to ensure your progress.
            </p>
            <button 
              className="btn btn-secondary" 
              onClick={onContactClick}
              style={{ marginTop: '1.5rem', alignSelf: 'flex-start' }}
            >
              Contact Our Consultants
            </button>
          </div>

          {/* Right: Framed image */}
          <div style={styles.aboutMedia}>
            <div className="image-offset-wrapper" style={{ width: '90%', margin: '0 auto' }}>
              <div className="image-offset-frame" />
              <div className="image-offset-content" style={styles.placeholderBox}>
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" 
                  alt="Locuspath Learning Services Instructors" 
                  style={styles.aboutImage}
                />
                <div style={styles.imageOverlay}>
                  <span style={styles.overlayText}>Qualified Training Staff</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Three Core Pillars */}
        <div style={styles.pillarsGrid}>
          <div style={styles.pillarCard}>
            <div style={styles.pillarIcon}>
              <GraduationCap size={24} color="var(--color-accent)" />
            </div>
            <h4 style={styles.pillarTitle}>Qualified & Supportive Faculty</h4>
            <p style={styles.pillarText}>
              Our trainers hold advanced degrees and official certifications in foreign linguistics. They are highly supportive, patient, and focus on creating a friendly, interactive atmosphere.
            </p>
          </div>

          <div style={styles.pillarCard}>
            <div style={styles.pillarIcon}>
              <Award size={24} color="var(--color-accent)" />
            </div>
            <h4 style={styles.pillarTitle}>Industrial & Career Focus</h4>
            <p style={styles.pillarText}>
              We integrate real-world professional requirements into our programs—including business honorifics (Keigo in Japanese), formal email writing, and corporate interview prep.
            </p>
          </div>

          <div style={styles.pillarCard}>
            <div style={styles.pillarIcon}>
              <MapPin size={24} color="var(--color-accent)" />
            </div>
            <h4 style={styles.pillarTitle}>Prime Campus Location</h4>
            <p style={styles.pillarText}>
              Situated in the city center, our campus is easily accessible. We are located just a 2-minute walk from the Central Metro Station (Gate 2), making daily commutes simple.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: 'var(--color-bg-sage-wash)',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '5rem',
  },
  sectionSub: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    color: 'var(--color-accent)',
    fontWeight: '600',
    display: 'block',
    marginBottom: '0.5rem',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  sectionIntro: {
    fontSize: '1.05rem',
    color: 'var(--color-text-muted)',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  philosophyBlock: {
    gridColumn: 'span 7',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  philosophyTitle: {
    fontSize: '2.2rem',
    marginBottom: '1.5rem',
    lineHeight: '1.25',
  },
  philosophyText: {
    fontSize: '0.98rem',
    color: 'var(--color-text-muted)',
    lineHeight: '1.75',
    marginBottom: '1.25rem',
  },
  aboutMedia: {
    gridColumn: 'span 5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderBox: {
    width: '100%',
    height: '380px',
    borderRadius: '4px',
    border: '1px solid var(--color-border)',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-md)',
  },
  aboutImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    background: 'linear-gradient(to top, rgba(44, 37, 34, 0.85), rgba(44, 37, 34, 0))',
    padding: '1.5rem',
    display: 'flex',
    alignItems: 'flex-end',
  },
  overlayText: {
    color: 'var(--color-white)',
    fontFamily: 'var(--font-serif)',
    fontSize: '1.15rem',
    fontWeight: '500',
    letterSpacing: '0.05em',
  },
  pillarsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2.5rem',
    borderTop: '1px solid var(--color-border)',
    paddingTop: '4rem',
  },
  pillarCard: {
    display: 'flex',
    flexDirection: 'column',
  },
  pillarIcon: {
    width: '44px',
    height: '44px',
    borderRadius: '4px',
    backgroundColor: 'var(--color-bg-alt)',
    border: '1px solid var(--color-border)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.25rem',
  },
  pillarTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: 'var(--color-text)',
    marginBottom: '0.75rem',
    fontFamily: 'var(--font-sans)',
  },
  pillarText: {
    fontSize: '0.88rem',
    color: 'var(--color-text-muted)',
    lineHeight: '1.6',
  }
};

// CSS Injection for responsiveness
const aboutStyleTag = document.createElement('style');
aboutStyleTag.innerHTML = `
  @media (max-width: 992px) {
    #root div[style*="philosophyBlock"] {
      grid-column: span 12 !important;
    }
    #root div[style*="aboutMedia"] {
      grid-column: span 12 !important;
      margin-top: 2rem;
    }
    #root div[style*="pillarsGrid"] {
      grid-template-columns: 1fr !important;
      gap: 2rem !important;
      padding-top: 3rem !important;
    }
  }
`;
document.head.appendChild(aboutStyleTag);
