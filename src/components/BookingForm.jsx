import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function BookingForm({ initialLanguage = '', initialCourse = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    language: '',
    course: '',
    timeSlot: '',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Update form if props change
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      language: initialLanguage || prev.language,
      course: initialCourse || prev.course,
    }));
  }, [initialLanguage, initialCourse]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.language) {
      setError('Please fill in Name, Phone Number, and select a Language.');
      return;
    }
    // Phone validation (simple 10 digit check)
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    setError('');
    setIsSubmitted(true);
    // In a real app, this would send an API request
    console.log('Form Submitted Data:', formData);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      language: '',
      course: '',
      timeSlot: '',
      notes: '',
    });
  };

  return (
    <section className="section animate-fade-up" style={styles.section}>
      <div className="container" style={styles.grid}>
        
        {/* Contact info column */}
        <div style={styles.infoColumn}>
          <span style={styles.sectionSub}>Get in touch</span>
          <h2 style={styles.sectionTitle}>Visit Our Learning Centre</h2>
          <p style={styles.sectionIntro}>
            Have questions about our syllabus, batches, or study-abroad counseling? Drop by our campus or call our academic team directly.
          </p>

          <div style={styles.contactDetails}>
            <div style={styles.detailItem}>
              <div style={styles.iconCircle}>
                <MapPin size={20} color="var(--color-accent)" />
              </div>
              <div>
                <span style={styles.detailHeader}>Campus Address</span>
                <p style={styles.detailText}>
                  123, Academic Block, Sector 4,<br />
                  Landmark Road, Metro Gate 2,<br />
                  City Center, Pin 110001
                </p>
              </div>
            </div>

            <div style={styles.detailItem}>
              <div style={styles.iconCircle}>
                <Phone size={20} color="var(--color-accent)" />
              </div>
              <div>
                <span style={styles.detailHeader}>Call / WhatsApp</span>
                <p style={styles.detailText}>
                  <strong>+91 82877 68083</strong><br />
                  <strong>+91 93183 68267</strong>
                </p>
              </div>
            </div>

            <div style={styles.detailItem}>
              <div style={styles.iconCircle}>
                <Clock size={20} color="var(--color-accent)" />
              </div>
              <div>
                <span style={styles.detailHeader}>Opening Hours</span>
                <p style={styles.detailText}>
                  Monday - Sunday: 9:00 AM - 8:00 PM<br />
                  <span style={{ color: 'var(--color-sage)', fontWeight: '600' }}>Open Today</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form column */}
        <div style={styles.formColumn}>
          <div style={styles.formCard}>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                <h3 style={styles.formTitle}>Book a Free Demo Class</h3>
                <p style={styles.formSubtitle}>Experience our interactive teaching method first-hand with no obligations.</p>

                {error && <div style={styles.errorMessage}>{error}</div>}

                <div className="form-group">
                  <label className="form-label" htmlFor="name">Your Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="e.g. 9876543210"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address (Optional)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="e.g. name@domain.com"
                  />
                </div>

                <div style={styles.row}>
                  <div className="form-group" style={{ flex: 1 }}>
                    <label className="form-label" htmlFor="language">Language *</label>
                    <select
                      id="language"
                      name="language"
                      value={formData.language}
                      onChange={handleChange}
                      className="form-control"
                      style={styles.select}
                      required
                    >
                      <option value="">Select language</option>
                      <option value="Japanese">Japanese</option>
                      <option value="Spanish">Spanish</option>
                      <option value="English">English</option>
                      <option value="French">French</option>
                      <option value="German">German</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ flex: 1 }}>
                    <label className="form-label" htmlFor="timeSlot">Preferred Time *</label>
                    <select
                      id="timeSlot"
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleChange}
                      className="form-control"
                      style={styles.select}
                      required
                    >
                      <option value="">Select slot</option>
                      <option value="Morning">Morning Batch (9 AM - 12 PM)</option>
                      <option value="Afternoon">Afternoon Batch (12 PM - 4 PM)</option>
                      <option value="Evening">Evening Batch (4 PM - 8 PM)</option>
                      <option value="Weekend">Weekend Batches (Sat/Sun)</option>
                    </select>
                  </div>
                </div>

                {formData.course && (
                  <div style={styles.selectedCourseAlert}>
                    Selected Program: <strong>{formData.course}</strong>
                  </div>
                )}

                <div className="form-group">
                  <label className="form-label" htmlFor="notes">Questions / Learning Experience</label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className="form-control"
                    rows="3"
                    placeholder="Tell us about your learning goals or previous studies..."
                    style={{ resize: 'none' }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                  <Send size={14} style={{ marginRight: '8px' }} /> Submit Registration
                </button>
              </form>
            ) : (
              /* Success Panel */
              <div style={styles.successPanel}>
                <CheckCircle2 size={56} color="var(--color-sage)" style={{ marginBottom: '1.5rem' }} />
                <h3 style={{ ...styles.formTitle, color: 'var(--color-text)' }}>Registration Received!</h3>
                <p style={styles.successMessageText}>
                  Thank you, <strong>{formData.name}</strong>. Your inquiry for <strong>{formData.language}</strong> has been registered.
                </p>
                <div style={styles.successDetailBox}>
                  <p>Our language consultant will reach out to you within <strong>2 hours</strong> on <strong>{formData.phone}</strong> to confirm your free demo class slot.</p>
                </div>
                <button 
                  className="btn btn-secondary" 
                  onClick={handleReset}
                  style={{ marginTop: '1.5rem', width: '100%' }}
                >
                  Submit Another Request
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: 'var(--color-bg-alt)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.1fr',
    gap: '5rem',
    alignItems: 'start',
  },
  infoColumn: {
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
    marginBottom: '1.5rem',
  },
  sectionIntro: {
    fontSize: '1rem',
    color: 'var(--color-text-muted)',
    lineHeight: '1.7',
    marginBottom: '3rem',
  },
  contactDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  detailItem: {
    display: 'flex',
    gap: '1.25rem',
    alignItems: 'flex-start',
  },
  iconCircle: {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    backgroundColor: 'var(--color-white)',
    border: '1px solid var(--color-border)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    boxShadow: 'var(--shadow-sm)',
  },
  detailHeader: {
    display: 'block',
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'var(--color-text-muted)',
    marginBottom: '0.25rem',
    fontWeight: '600',
  },
  detailText: {
    fontSize: '0.95rem',
    color: 'var(--color-text)',
    lineHeight: '1.5',
  },
  formColumn: {
    width: '100%',
  },
  formCard: {
    backgroundColor: 'var(--color-white)',
    border: '1px solid var(--color-border)',
    borderRadius: '4px',
    padding: '3rem',
    boxShadow: 'var(--shadow-md)',
  },
  formTitle: {
    fontSize: '1.8rem',
    marginBottom: '0.5rem',
  },
  formSubtitle: {
    fontSize: '0.85rem',
    color: 'var(--color-text-muted)',
    marginBottom: '2rem',
  },
  row: {
    display: 'flex',
    gap: '1rem',
  },
  select: {
    appearance: 'none',
    backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23615650' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 1rem center',
    backgroundSize: '1rem',
    paddingRight: '2.5rem',
  },
  selectedCourseAlert: {
    padding: '0.75rem 1rem',
    backgroundColor: '#fbfaf7',
    border: '1px solid var(--color-border)',
    borderRadius: '4px',
    fontSize: '0.85rem',
    marginBottom: '1.5rem',
    color: 'var(--color-text-muted)',
  },
  errorMessage: {
    padding: '0.75rem 1rem',
    backgroundColor: '#fdf3f2',
    border: '1px solid #eccbc8',
    borderRadius: '4px',
    fontSize: '0.85rem',
    color: '#b23b3b',
    marginBottom: '1.5rem',
  },
  successPanel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '1.5rem 0',
  },
  successMessageText: {
    fontSize: '1.05rem',
    color: 'var(--color-text)',
    marginTop: '0.5rem',
    marginBottom: '1rem',
  },
  successDetailBox: {
    backgroundColor: '#faf8f4',
    border: '1px solid var(--color-border)',
    padding: '1.25rem',
    borderRadius: '4px',
    lineHeight: '1.6',
    fontSize: '0.9rem',
    color: 'var(--color-text-muted)',
  }
};

// CSS Injection for forms responsiveness
const formStyleTag = document.createElement('style');
formStyleTag.innerHTML = `
  @media (max-width: 992px) {
    #root div[style*="grid"] {
      grid-template-columns: 1fr !important;
      gap: 3.5rem !important;
    }
  }
  @media (max-width: 768px) {
    #root div[style*="formCard"] {
      padding: 1.5rem !important;
    }
    #root div[style*="row"] {
      flex-direction: column !important;
      gap: 0 !important;
    }
  }
`;
document.head.appendChild(formStyleTag);
