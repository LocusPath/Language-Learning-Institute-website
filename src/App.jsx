import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Reviews from './components/Reviews';
import CourseCatalog from './components/CourseCatalog';
import PlacementQuiz from './components/PlacementQuiz';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import BookingForm from './components/BookingForm';
import { Compass, GraduationCap, Star, Phone, MapPin, Mail } from 'lucide-react';

const showcaseLanguages = [
  {
    id: 'lang-ja',
    name: 'Japanese',
    script: '日本語',
    levelInfo: 'JLPT N5 - N3',
    color: '#C57B57',
    desc: 'Master Kanji scripts and Keigo business honorifics. Ideal for tech, commerce, & MNC career paths.'
  },
  {
    id: 'lang-es',
    name: 'Spanish',
    script: 'Español',
    levelInfo: 'DELE A1 - B1',
    color: '#5B7265',
    desc: 'Build fast conversational fluency. Prepare for international business, travel, and SIELE certification.'
  },
  {
    id: 'lang-en',
    name: 'English',
    script: 'English',
    levelInfo: 'Spoken & Corp',
    color: '#61727A',
    desc: 'Acquire corporate speech, vocabulary enrichment, accent training, and public speaking confidence.'
  },
  {
    id: 'lang-fr',
    name: 'French',
    script: 'Français',
    levelInfo: 'DELF A1 - A2',
    color: '#b5847e',
    desc: 'Master the elegant French vocabulary and grammar foundation. Explore global fashion and travel.'
  },
  {
    id: 'lang-de',
    name: 'German',
    script: 'Deutsch',
    levelInfo: 'Goethe A1 - A2',
    color: '#bda07b',
    desc: 'Learn sentence patterns and cases (Nominative/Accusative). Essential for study abroad.'
  }
];

const faqData = [
  {
    q: "Are the classes conducted online or offline?",
    a: "We primarily host offline, physical classroom batches at our central campus to encourage interactive speaking. We also facilitate hybrid batches for students who need flexible schedules."
  },
  {
    q: "Will I get prepared for official exams like JLPT and DELE?",
    a: "Absolutely. Our curricula for Japanese, Spanish, French, and German are specifically aligned with official international standard exams (JLPT, DELE, DELF, and Goethe-Zertifikat) with complete past paper practice."
  },
  {
    q: "What is the typical batch size?",
    a: "We restrict our standard batches to 8-12 students, and our Intensive/Express batches to 4-6 students. This ensures that every learner gets individual attention and ample speaking practice."
  },
  {
    q: "Can I request a batch switch if my timing changes?",
    a: "Yes. Students can request a batch transition or timing switch (e.g., morning to weekend batches) up to 2 times during their course duration, subject to seat availability."
  }
];

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [preSelectedLanguage, setPreSelectedLanguage] = useState('');
  const [preSelectedCourse, setPreSelectedCourse] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fadeClass, setFadeClass] = useState('');

  useEffect(() => {
    // Start fading out slightly before removing the loading overlay
    const fadeTimer = setTimeout(() => {
      setFadeClass('fade-out');
    }, 1500);

    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // Navigation handlers
  const handleBookCourse = (language, courseTitle) => {
    setPreSelectedLanguage(language);
    setPreSelectedCourse(courseTitle);
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLanguageCardClick = (language) => {
    setPreSelectedLanguage(language);
    setPreSelectedCourse('');
    setActiveTab('courses');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartQuiz = () => {
    setActiveTab('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreCourses = () => {
    setActiveTab('courses');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = () => {
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={styles.appWrapper}>
      {/* Premium Loader Overlay */}
      {loading && (
        <div className={`loader-overlay ${fadeClass}`}>
          <h1 className="loader-logo-main">LOCUSPATH</h1>
          <span className="loader-logo-sub">Servicios de Aprendizaje</span>
          <div className="loader-bar-bg">
            <div className="loader-bar-fill" />
          </div>
        </div>
      )}

      {/* Universal Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Render Dynamic Content Views */}
      <main style={styles.mainContent}>
        {activeTab === 'home' && (
          <div>
            <Hero 
              onExploreCourses={handleExploreCourses} 
              onStartQuiz={handleStartQuiz} 
            />

            {/* Language Showcase Section */}
            <section className="section animate-fade-up" style={styles.showcaseSection}>
              <div className="container">
                <div style={styles.sectionHeader}>
                  <span style={styles.sectionSub}>Explore Cultures</span>
                  <h2 style={styles.sectionTitle}>Choose Your Language</h2>
                  <p style={styles.sectionIntro}>
                    Explore professional-grade curricula crafted for fluency, official exams, and MNC career placements. Click a language card to see batch schedules.
                  </p>
                </div>
                
                <div style={styles.languageGrid}>
                  {showcaseLanguages.map((lang) => (
                    <div 
                      key={lang.id} 
                      style={{ 
                        ...styles.languageCard, 
                        borderTop: `4px solid ${lang.color}`,
                        backgroundColor: 'var(--color-white)' 
                      }}
                      onClick={() => handleLanguageCardClick(lang.name)}
                    >
                      <div style={styles.cardHeaderRow}>
                        <span style={{ ...styles.largeScript, color: lang.color }}>{lang.script}</span>
                        <span style={styles.cardLangBadge}>{lang.levelInfo}</span>
                      </div>
                      <h3 style={styles.cardLangName}>{lang.name}</h3>
                      <p style={styles.cardLangDesc}>{lang.desc}</p>
                      <span style={{ ...styles.cardLangCta, color: lang.color }}>
                        Explore Batches →
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Quick About Section */}
            <AboutUs onContactClick={handleContactClick} />

            {/* Student Journey Section */}
            <section className="section animate-fade-up" style={styles.journeySection}>
              <div className="container">
                <div style={styles.sectionHeader}>
                  <span style={styles.sectionSub}>Our Methodology</span>
                  <h2 style={styles.sectionTitle}>How We Guide You to Fluency</h2>
                  <p style={styles.sectionIntro}>
                    A streamlined, structured path designed to take you from a complete beginner to a confident multilingual speaker.
                  </p>
                </div>

                <div style={styles.journeyTimeline}>
                  <div style={styles.journeyStep}>
                    <div style={{ ...styles.stepNumber, backgroundColor: 'var(--color-accent-light)', color: 'var(--color-accent)' }}>1</div>
                    <h4 style={styles.stepTitle}>Choose Your Path</h4>
                    <p style={styles.stepText}>Explore programs or take our 1-minute Placement Quiz to identify your level.</p>
                  </div>

                  <div style={styles.journeyStep}>
                    <div style={{ ...styles.stepNumber, backgroundColor: '#e2eedb', color: 'var(--color-sage)' }}>2</div>
                    <h4 style={styles.stepTitle}>Book a Trial Class</h4>
                    <p style={styles.stepText}>Attend a free 60-minute trial class with our certified, supportive tutors.</p>
                  </div>

                  <div style={styles.journeyStep}>
                    <div style={{ ...styles.stepNumber, backgroundColor: '#e2f0f4', color: 'var(--color-teal)' }}>3</div>
                    <h4 style={styles.stepTitle}>Achieve Fluency</h4>
                    <p style={styles.stepText}>Attend small sessions, take mock assessments, and graduate with global certificates.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Reviews Section */}
            <Reviews />

            {/* FAQ Accordion Section */}
            <section className="section animate-fade-up" style={styles.faqSection}>
              <div className="container">
                <div style={styles.sectionHeader}>
                  <span style={styles.sectionSub}>Got Questions?</span>
                  <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>
                  <p style={styles.sectionIntro}>
                    Find quick answers about batch schedules, certifications, offline vs online classes, and trial classes.
                  </p>
                </div>

                <div style={styles.faqWrapper}>
                  {faqData.map((faq, index) => {
                    const isActive = activeFaq === index;
                    return (
                      <div 
                        key={index} 
                        className={`faq-accordion ${isActive ? 'active' : ''}`}
                      >
                        <button 
                          style={styles.faqTriggerBtn}
                          className="faq-trigger"
                          onClick={() => setActiveFaq(isActive ? null : index)}
                        >
                          <span>{faq.q}</span>
                          <span className="faq-icon" style={{ transform: isActive ? 'rotate(180deg)' : 'rotate(0)' }}>▼</span>
                        </button>
                        <div 
                          className="faq-content"
                          style={{ 
                            maxHeight: isActive ? '200px' : '0',
                            padding: isActive ? '1.5rem 2rem' : '0 2rem',
                            borderTop: isActive ? '1px solid var(--color-border)' : 'none',
                            overflow: 'hidden',
                            backgroundColor: 'var(--color-white)',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: '1.6' }}>{faq.a}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'courses' && (
          <CourseCatalog onBookCourse={handleBookCourse} />
        )}

        {activeTab === 'quiz' && (
          <PlacementQuiz onBookCourse={handleBookCourse} />
        )}

        {activeTab === 'pricing' && (
          <Pricing onSelectPlan={handleBookCourse} />
        )}

        {activeTab === 'gallery' && (
          <Gallery />
        )}

        {activeTab === 'about' && (
          <AboutUs onContactClick={handleContactClick} />
        )}

        {activeTab === 'contact' && (
          <BookingForm 
            initialLanguage={preSelectedLanguage} 
            initialCourse={preSelectedCourse} 
          />
        )}
      </main>

      {/* Universal Footer */}
      <footer style={styles.footer}>
        <div className="container" style={styles.footerGrid}>
          
          {/* Footer Brand */}
          <div style={styles.footerBrand}>
            <h3 style={styles.footerLogo}>LOCUSPATH LEARNING</h3>
            <span style={styles.logoHindi}>Servicios de Aprendizaje</span>
            <p style={styles.footerTagline}>
              A trusted institute for professional training in Japanese, Spanish, English, French, and German.
            </p>
            <div style={styles.ratingBox}>
              <Star size={14} fill="var(--color-accent)" stroke="none" />
              <strong style={{ fontSize: '0.85rem', color: 'var(--color-text)' }}>4.9 / 5</strong>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>(150 Google Reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div style={styles.footerLinks}>
            <span style={styles.footerColTitle}>Navigation</span>
            <div style={styles.linksList}>
              <span style={styles.footerLink} onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</span>
              <span style={styles.footerLink} onClick={() => { setActiveTab('courses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Courses</span>
              <span style={styles.footerLink} onClick={() => { setActiveTab('quiz'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Placement Quiz</span>
              <span style={styles.footerLink} onClick={() => { setActiveTab('pricing'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Pricing Plans</span>
              <span style={styles.footerLink} onClick={() => { setActiveTab('gallery'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Photo Gallery</span>
              <span style={styles.footerLink} onClick={() => { setActiveTab('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>About Our Team</span>
            </div>
          </div>

          {/* Certifications Info */}
          <div style={styles.footerLinks}>
            <span style={styles.footerColTitle}>Programs</span>
            <div style={styles.linksList}>
              <span style={styles.footerTextItem}>Japanese (JLPT N5, N4, N3)</span>
              <span style={styles.footerTextItem}>Spanish (DELE / SIELE A1-B1)</span>
              <span style={styles.footerTextItem}>English (Spoken & Corporate)</span>
              <span style={styles.footerTextItem}>French (DELF A1 Preparation)</span>
              <span style={styles.footerTextItem}>German (Goethe Zertifikat A1)</span>
            </div>
          </div>

          {/* Contact details */}
          <div style={styles.footerContact}>
            <span style={styles.footerColTitle}>Learning Campus</span>
            <div style={styles.contactList}>
              <div style={styles.contactItem}>
                <MapPin size={14} color="var(--color-accent)" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span style={styles.contactText}>
                  123, Academic Block, Sector 4, Landmark Road, Metro Gate 2, City Center, Pin 110001
                </span>
              </div>
              <div style={styles.contactItem}>
                <Phone size={14} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={styles.contactText}>
                  +91 82877 68083<br />
                  +91 93183 68267
                </span>
              </div>
              <div style={styles.contactItem}>
                <Mail size={14} color="var(--color-accent)" style={{ flexShrink: 0 }} />
                <span style={styles.contactText}>info@locuspath.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright Panel */}
        <div style={styles.copyrightPanel}>
          <div className="container" style={styles.copyrightContainer}>
            <span style={styles.copyrightText}>
              © {new Date().getFullYear()} Locuspath Learning Services. All rights reserved.
            </span>
            <span style={styles.copyrightSubtext}>
              Developed with Premium Warm Editorial Architecture
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  appWrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: 'var(--color-bg)',
  },
  mainContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: 'var(--color-bg-alt)',
    borderTop: '1px solid var(--color-border)',
    paddingTop: '5rem',
  },
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr 0.8fr 1.2fr',
    gap: '3rem',
    paddingBottom: '4rem',
  },
  footerBrand: {
    display: 'flex',
    flexDirection: 'column',
  },
  footerLogo: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.2rem',
    fontWeight: '600',
    letterSpacing: '0.08em',
    marginBottom: '4px',
  },
  logoHindi: {
    fontSize: '0.65rem',
    color: 'var(--color-text-muted)',
    marginBottom: '1rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  footerTagline: {
    fontSize: '0.85rem',
    color: 'var(--color-text-muted)',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    maxWidth: '280px',
  },
  ratingBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    border: '1px solid var(--color-border)',
    borderRadius: '4px',
    padding: '0.5rem 0.75rem',
    width: 'fit-content',
    backgroundColor: 'var(--color-white)',
  },
  footerLinks: {
    display: 'flex',
    flexDirection: 'column',
  },
  footerColTitle: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    color: 'var(--color-text)',
    fontWeight: '600',
    marginBottom: '1.5rem',
  },
  linksList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  footerLink: {
    fontSize: '0.85rem',
    color: 'var(--color-text-muted)',
    cursor: 'pointer',
    transition: 'var(--transition-editorial)',
    width: 'fit-content',
  },
  footerTextItem: {
    fontSize: '0.85rem',
    color: 'var(--color-text-muted)',
  },
  footerContact: {
    display: 'flex',
    flexDirection: 'column',
  },
  contactList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  contactItem: {
    display: 'flex',
    gap: '0.75rem',
    alignItems: 'flex-start',
  },
  contactText: {
    fontSize: '0.85rem',
    color: 'var(--color-text-muted)',
    lineHeight: '1.5',
  },
  copyrightPanel: {
    borderTop: '1px solid var(--color-border)',
    padding: '1.5rem 0',
    backgroundColor: 'var(--color-white)',
  },
  copyrightContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '0.75rem',
  },
  copyrightText: {
    fontSize: '0.8rem',
    color: 'var(--color-text-muted)',
  },
  copyrightSubtext: {
    fontSize: '0.75rem',
    color: 'var(--color-accent)',
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic',
  },
  showcaseSection: {
    backgroundColor: 'var(--color-bg)',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '4.5rem',
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
    fontSize: '1rem',
    color: 'var(--color-text-muted)',
    maxWidth: '600px',
    margin: '0 auto',
  },
  languageGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '1.5rem',
  },
  languageCard: {
    backgroundColor: 'var(--color-white)',
    border: '1px solid var(--color-border)',
    borderRadius: '4px',
    padding: '2rem 1.5rem',
    cursor: 'pointer',
    boxShadow: 'var(--shadow-sm)',
    transition: 'var(--transition-editorial)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '270px',
  },
  cardHeaderRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  largeScript: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.6rem',
    fontWeight: '600',
  },
  cardLangBadge: {
    fontSize: '0.65rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: 'var(--color-text-muted)',
    backgroundColor: 'var(--color-bg-alt)',
    border: '1px solid var(--color-border)',
    padding: '0.2rem 0.5rem',
    borderRadius: '2px',
  },
  cardLangName: {
    fontSize: '1.4rem',
    marginBottom: '0.5rem',
  },
  cardLangDesc: {
    fontSize: '0.85rem',
    color: 'var(--color-text-muted)',
    lineHeight: '1.5',
    marginBottom: '1.5rem',
    flexGrow: 1,
  },
  cardLangCta: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    fontWeight: '600',
    marginTop: 'auto',
  },
  journeySection: {
    backgroundColor: 'var(--color-bg-peach-wash)',
  },
  journeyTimeline: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '3rem',
  },
  journeyStep: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  stepNumber: {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    fontWeight: '700',
    fontFamily: 'var(--font-serif)',
    marginBottom: '1.5rem',
    boxShadow: 'var(--shadow-sm)',
    border: '1px solid var(--color-border)',
  },
  stepTitle: {
    fontSize: '1.35rem',
    marginBottom: '0.75rem',
  },
  stepText: {
    fontSize: '0.88rem',
    color: 'var(--color-text-muted)',
    lineHeight: '1.6',
    maxWidth: '280px',
  },
  faqSection: {
    backgroundColor: 'var(--color-bg)',
  },
  faqWrapper: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  faqTriggerBtn: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'none',
    border: 'none',
    outline: 'none',
  }
};

// CSS Injection for app responsiveness and hover effects
const appStyleTag = document.createElement('style');
appStyleTag.innerHTML = `
  #root footer span[style*="footerLink"]:hover {
    color: var(--color-accent) !important;
    text-decoration: underline;
  }
  /* Language Card hover effects */
  #root div[style*="languageCard"]:hover {
    border-color: var(--color-text) !important;
    transform: translateY(-5px);
    box-shadow: var(--shadow-md) !important;
  }
  @media (max-width: 992px) {
    #root footer > div {
      grid-template-columns: 1fr 1fr !important;
      gap: 2.5rem !important;
    }
    #root div[style*="journeyTimeline"] {
      grid-template-columns: 1fr !important;
      gap: 2.5rem !important;
    }
  }
  @media (max-width: 768px) {
    #root footer > div {
      grid-template-columns: 1fr !important;
      gap: 2rem !important;
    }
    #root div[style*="copyrightContainer"] {
      flex-direction: column !important;
      align-items: flex-start !important;
    }
    #root div[style*="languageGrid"] {
      grid-template-columns: 1fr !important;
    }
  }
`;
document.head.appendChild(appStyleTag);

export default App;
