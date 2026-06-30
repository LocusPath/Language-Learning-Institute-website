import React from 'react';
import { Check, Info, Calendar } from 'lucide-react';

export default function Pricing({ onSelectPlan }) {
  const plans = [
    {
      id: 'plan-standard',
      name: 'Standard Batch',
      price: '₹14,999',
      period: 'Full Course Level',
      duration: '4 Months Duration',
      popular: false,
      badge: 'Best Value',
      features: [
        'Certified Tutors & Interactive Sessions',
        'Physical Booklets & Study Cards',
        'Official Exam Preparation (JLPT/DELE)',
        'Classroom batch (8-12 students)',
        'Weekly Listening & Vocabulary Drills',
        '2 Mock Exams with detailed evaluation',
      ],
      cta: 'Enroll in Standard Batch'
    },
    {
      id: 'plan-intensive',
      name: 'Intensive / Express',
      price: '₹19,999',
      period: 'Full Course Level',
      duration: '3 Months Fast-Track',
      popular: true,
      badge: 'Most Popular',
      features: [
        'Everything in Standard Batch',
        'Accelerated Daily Classes (Mon-Thu)',
        'Ultra-Small Batches (4-6 students)',
        'Daily speaking & pronunciation workshops',
        'Extra interview prep & corporate Keigo',
        'Unlimited access to multimedia lab',
        '5 Mock Exams & specialized reviews',
      ],
      cta: 'Join Intensive Express'
    },
    {
      id: 'plan-private',
      name: '1-on-1 Personalized',
      price: '₹34,999',
      period: 'Customized Block',
      duration: 'Flexible Pace',
      popular: false,
      badge: 'Premium Coaching',
      features: [
        'Personal dedicated linguistic coach',
        'Fully customized syllabus & speed',
        'Highly flexible timing (9 AM - 8 PM)',
        'Ideal for business delegates & travelers',
        'Visa interview & visa SOP consultancy',
        'Intense conversation drills with native speakers',
      ],
      cta: 'Book Private Tutor'
    }
  ];

  return (
    <section className="section animate-fade-up" style={styles.section}>
      <div className="container">
        
        {/* Section Header */}
        <div style={styles.sectionHeader}>
          <span style={styles.sectionSub}>Course Pricing</span>
          <h2 style={styles.sectionTitle}>Invest in Your Fluency</h2>
          <p style={styles.sectionIntro}>
            Clear, upfront pricing with no hidden charges. All packages include physical textbooks, official mock tests, and lifetime access to our global alumni network.
          </p>
        </div>

        {/* Trial Class Promo Banner */}
        <div style={styles.promoBanner}>
          <div style={styles.promoContent}>
            <Calendar size={20} color="var(--color-accent)" style={{ marginRight: '12px', flexShrink: 0 }} />
            <p style={styles.promoText}>
              Not sure which plan matches your learning style? Experience a <strong>Free 1-Hour Demo Session</strong> before enrolling.
            </p>
          </div>
          <button 
            className="btn btn-primary" 
            style={styles.promoBtn}
            onClick={() => onSelectPlan('All', 'Free Demo Session')}
          >
            Book Free Demo
          </button>
        </div>

        {/* Plans Grid */}
        <div style={styles.plansGrid}>
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              style={{
                ...styles.planCard,
                borderColor: plan.popular ? 'var(--color-text)' : 'var(--color-border)',
                transform: plan.popular ? 'scale(1.02)' : 'none',
              }}
            >
              {plan.popular && <span style={styles.popularBadge}>{plan.badge}</span>}
              {!plan.popular && plan.id === 'plan-private' && <span style={styles.premiumBadge}>{plan.badge}</span>}
              
              <div style={styles.cardHeader}>
                <h3 style={styles.planName}>{plan.name}</h3>
                <span style={styles.planDuration}>{plan.duration}</span>
                <div style={styles.priceRow}>
                  <span style={styles.priceVal}>{plan.price}</span>
                  <span style={styles.pricePeriod}>/ {plan.period}</span>
                </div>
              </div>

              {/* Features List */}
              <ul style={styles.featuresList}>
                {plan.features.map((feat, idx) => (
                  <li key={idx} style={styles.featureItem}>
                    <Check size={14} color="var(--color-sage)" style={{ marginRight: '10px', flexShrink: 0, marginTop: '4px' }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Plan Action */}
              <button
                className={`btn ${plan.popular ? 'btn-accent' : 'btn-secondary'}`}
                style={styles.cardBtn}
                onClick={() => onSelectPlan('All', plan.name)}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Refund Policy Note */}
        <div style={styles.infoBox}>
          <Info size={16} color="var(--color-text-muted)" style={{ marginRight: '10px', flexShrink: 0, marginTop: '2px' }} />
          <p style={styles.infoText}>
            <strong>Batch Flexibility:</strong> Students can request a batch transition or switch timings (morning to weekend) up to 2 times during their course duration, subject to seat availability.
          </p>
        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
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
    lineHeight: '1.6',
  },
  promoBanner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'var(--color-bg-alt)',
    border: '1px solid var(--color-border)',
    borderRadius: '4px',
    padding: '1.5rem 2.5rem',
    marginBottom: '4rem',
    gap: '2rem',
  },
  promoContent: {
    display: 'flex',
    alignItems: 'center',
  },
  promoText: {
    fontSize: '0.95rem',
    color: 'var(--color-text)',
    lineHeight: '1.5',
  },
  promoBtn: {
    fontSize: '0.8rem',
    padding: '0.6rem 1.5rem',
    whiteSpace: 'nowrap',
  },
  plansGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
    alignItems: 'stretch',
    marginBottom: '3.5rem',
  },
  planCard: {
    backgroundColor: 'var(--color-white)',
    border: '1px solid var(--color-border)',
    borderRadius: '4px',
    padding: '3rem 2.25rem 2.25rem 2.25rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    boxShadow: 'var(--shadow-sm)',
    transition: 'var(--transition-editorial)',
  },
  popularBadge: {
    position: 'absolute',
    top: '1.25rem',
    right: '1.5rem',
    fontSize: '0.65rem',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: 'var(--color-white)',
    backgroundColor: 'var(--color-accent)',
    padding: '0.25rem 0.6rem',
    borderRadius: '2px',
    fontWeight: '600',
  },
  premiumBadge: {
    position: 'absolute',
    top: '1.25rem',
    right: '1.5rem',
    fontSize: '0.65rem',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: 'var(--color-text)',
    backgroundColor: 'var(--color-bg-alt)',
    border: '1px solid var(--color-border)',
    padding: '0.25rem 0.6rem',
    borderRadius: '2px',
    fontWeight: '600',
  },
  cardHeader: {
    borderBottom: '1px solid var(--color-border)',
    paddingBottom: '1.75rem',
    marginBottom: '2rem',
  },
  planName: {
    fontSize: '1.6rem',
    marginBottom: '0.25rem',
  },
  planDuration: {
    display: 'block',
    fontSize: '0.8rem',
    color: 'var(--color-text-muted)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '1.25rem',
  },
  priceRow: {
    display: 'flex',
    alignItems: 'baseline',
  },
  priceVal: {
    fontSize: '2.4rem',
    fontFamily: 'var(--font-serif)',
    fontWeight: '600',
    color: 'var(--color-text)',
  },
  pricePeriod: {
    fontSize: '0.85rem',
    color: 'var(--color-text-muted)',
    marginLeft: '0.25rem',
  },
  featuresList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.9rem',
    marginBottom: '2.5rem',
    flexGrow: 1,
  },
  featureItem: {
    display: 'flex',
    alignItems: 'flex-start',
    fontSize: '0.88rem',
    color: 'var(--color-text-muted)',
    lineHeight: '1.4',
  },
  cardBtn: {
    width: '100%',
    fontSize: '0.85rem',
  },
  infoBox: {
    display: 'flex',
    alignItems: 'flex-start',
    backgroundColor: '#faf8f4',
    border: '1px solid var(--color-border)',
    borderRadius: '4px',
    padding: '1rem 1.5rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  infoText: {
    fontSize: '0.82rem',
    color: 'var(--color-text-muted)',
    lineHeight: '1.5',
  }
};

// CSS Injection for pricing responsiveness
const pricingStyleTag = document.createElement('style');
pricingStyleTag.innerHTML = `
  #root div[style*="planCard"]:hover {
    border-color: var(--color-text) !important;
    transform: translateY(-4px) !important;
    box-shadow: var(--shadow-md) !important;
  }
  @media (max-width: 992px) {
    #root div[style*="plansGrid"] {
      grid-template-columns: 1fr !important;
      gap: 2.5rem !important;
    }
    #root div[style*="planCard"] {
      transform: none !important;
      padding: 2rem 1.5rem !important;
    }
  }
  @media (max-width: 768px) {
    #root div[style*="promoBanner"] {
      flex-direction: column !important;
      align-items: flex-start !important;
      padding: 1.5rem !important;
      gap: 1rem !important;
    }
    #root div[style*="promoBanner"] button {
      width: 100% !important;
    }
  }
`;
document.head.appendChild(pricingStyleTag);
