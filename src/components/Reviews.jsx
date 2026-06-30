import React from 'react';
import { Star, MessageSquare } from 'lucide-react';

export default function Reviews() {
  const reviewsList = [
    {
      id: 'rev-1',
      author: 'John Doe',
      role: 'Spanish B1 Graduate',
      rating: 5,
      date: 'Google Review',
      comment: '#locuspathlearning is the best place that I found for linguistics training. I have completed my Spanish language training up to B1 level. The faculty is experienced, superb, and helpful. The environment they provide is worthy.'
    },
    {
      id: 'rev-2',
      author: 'Jane Smith',
      role: 'Japanese Student',
      rating: 5,
      date: 'Google Review',
      comment: 'Locuspath Learning Services is the best institute I have ever studied in. Best trainers with practical training. It is one of the finest institutes with teachers having vast knowledge.'
    },
    {
      id: 'rev-3',
      author: 'Alex Carter',
      role: 'English & Japanese Learner',
      rating: 5,
      date: 'Google Review',
      comment: 'This is one of the best places to learn Japanese and English. Super quality of teaching, friendly atmosphere, and supportive tutors.'
    },
    {
      id: 'rev-4',
      author: 'Sarah Lee',
      role: 'French Learner',
      rating: 5,
      date: 'Google Review',
      comment: 'Staff is supportive and trainers are well-qualified. The individual attention given to beginners makes learning foreign scripts very smooth.'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        size={14} 
        fill={i < rating ? "var(--color-accent)" : "none"} 
        stroke={i < rating ? "none" : "var(--color-border-hover)"} 
      />
    ));
  };

  return (
    <section className="section animate-fade-up" style={styles.section}>
      <div className="container">
        
        <div style={styles.headerGrid}>
          {/* Left Text */}
          <div style={styles.headerText}>
            <span style={styles.sectionSub}>Student Voices</span>
            <h2 style={styles.sectionTitle}>What Learners Say</h2>
            <p style={styles.sectionIntro}>
              We are proud of our student success. Read reviews directly from our official Google Maps profile.
            </p>
          </div>

          {/* Right Scoreboard */}
          <div style={styles.scoreboard}>
            <div style={styles.scoreRow}>
              <span style={styles.ratingNumber}>4.9</span>
              <div style={styles.starsWrapper}>
                <div style={styles.starsRow}>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={18} fill="var(--color-accent)" stroke="none" />
                  ))}
                </div>
                <span style={styles.reviewCount}>150 Google Reviews</span>
              </div>
            </div>
            <div style={styles.scoreBars}>
              <div style={styles.barItem}>
                <span style={styles.barLabel}>5 ★</span>
                <div style={styles.barBg}><div style={{ ...styles.barFill, width: '92%' }}></div></div>
              </div>
              <div style={styles.barItem}>
                <span style={styles.barLabel}>4 ★</span>
                <div style={styles.barBg}><div style={{ ...styles.barFill, width: '6%' }}></div></div>
              </div>
              <div style={styles.barItem}>
                <span style={styles.barLabel}>3 ★ or less</span>
                <div style={styles.barBg}><div style={{ ...styles.barFill, width: '2%' }}></div></div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div style={styles.reviewsGrid}>
          {reviewsList.map((review) => (
            <div key={review.id} style={styles.reviewCard}>
              {/* Quote Mark */}
              <div style={styles.quoteMark}>“</div>
              
              <div style={styles.ratingRow}>
                {renderStars(review.rating)}
              </div>

              <p style={styles.comment}>{review.comment}</p>

              <div style={styles.authorRow}>
                <div style={styles.authorMeta}>
                  <strong style={styles.authorName}>{review.author}</strong>
                  <span style={styles.authorRole}>{review.role}</span>
                </div>
                <span style={styles.sourceTag}>
                  <MessageSquare size={12} style={{ marginRight: '4px' }} /> {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: 'var(--color-bg-teal-wash)',
  },
  headerGrid: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: '4rem',
    alignItems: 'center',
    marginBottom: '5rem',
  },
  headerText: {
    display: 'flex',
    flexDirection: 'column',
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
    maxWidth: '500px',
  },
  scoreboard: {
    backgroundColor: 'var(--color-white)',
    border: '1px solid var(--color-border)',
    borderRadius: '4px',
    padding: '2rem',
    boxShadow: 'var(--shadow-sm)',
  },
  scoreRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    marginBottom: '1.5rem',
    borderBottom: '1px solid var(--color-border)',
    paddingBottom: '1.25rem',
  },
  ratingNumber: {
    fontSize: '3rem',
    fontFamily: 'var(--font-serif)',
    fontWeight: '700',
    color: 'var(--color-text)',
    lineHeight: '1',
  },
  starsWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  starsRow: {
    display: 'flex',
    gap: '2px',
    marginBottom: '4px',
  },
  reviewCount: {
    fontSize: '0.8rem',
    color: 'var(--color-text-muted)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  scoreBars: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  barItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    fontSize: '0.8rem',
    color: 'var(--color-text-muted)',
  },
  barLabel: {
    minWidth: '50px',
    textAlign: 'right',
  },
  barBg: {
    flexGrow: 1,
    height: '6px',
    backgroundColor: 'var(--color-bg-alt)',
    borderRadius: '3px',
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    backgroundColor: 'var(--color-accent)',
    borderRadius: '3px',
  },
  reviewsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '2rem',
  },
  reviewCard: {
    backgroundColor: 'var(--color-white)',
    border: '1px solid var(--color-border)',
    borderRadius: '4px',
    padding: '2.5rem 2rem 2rem 2rem',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'var(--shadow-sm)',
    transition: 'var(--transition-editorial)',
  },
  quoteMark: {
    position: 'absolute',
    top: '0.5rem',
    left: '1.5rem',
    fontSize: '4.5rem',
    fontFamily: 'var(--font-serif)',
    color: '#eae3d5',
    lineHeight: '1',
    userSelect: 'none',
  },
  ratingRow: {
    display: 'flex',
    gap: '2px',
    marginBottom: '1rem',
    position: 'relative',
    zIndex: 1,
  },
  comment: {
    fontSize: '0.92rem',
    color: 'var(--color-text)',
    lineHeight: '1.65',
    marginBottom: '2rem',
    flexGrow: 1,
    position: 'relative',
    zIndex: 1,
  },
  authorRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderTop: '1px solid var(--color-bg-alt)',
    paddingTop: '1rem',
  },
  authorMeta: {
    display: 'flex',
    flexDirection: 'column',
  },
  authorName: {
    fontSize: '0.9rem',
    color: 'var(--color-text)',
  },
  authorRole: {
    fontSize: '0.75rem',
    color: 'var(--color-text-muted)',
    marginTop: '2px',
  },
  sourceTag: {
    fontSize: '0.7rem',
    color: 'var(--color-accent)',
    display: 'flex',
    alignItems: 'center',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    fontWeight: '500',
  }
};

// CSS Injection for review hover styles
const reviewStyleTag = document.createElement('style');
reviewStyleTag.innerHTML = `
  #root div[style*="reviewCard"]:hover {
    border-color: var(--color-text) !important;
    transform: translateY(-4px);
    box-shadow: var(--shadow-md) !important;
  }
  @media (max-width: 992px) {
    #root div[style*="headerGrid"] {
      grid-template-columns: 1fr !important;
      gap: 2.5rem !important;
    }
  }
  @media (max-width: 768px) {
    #root div[style*="reviewsGrid"] {
      grid-template-columns: 1fr !important;
    }
  }
`;
document.head.appendChild(reviewStyleTag);
