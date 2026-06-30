import React, { useState } from 'react';
import { Calendar, Clock, Award, ShieldCheck } from 'lucide-react';

export default function CourseCatalog({ onBookCourse }) {
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const languages = ['All', 'Japanese', 'Spanish', 'English', 'French', 'German'];
  const levels = ['All', 'Beginner', 'Intermediate'];

  const courses = [
    {
      id: 'jp-n5',
      title: 'Japanese N5 Foundation',
      language: 'Japanese',
      level: 'Beginner',
      exam: 'JLPT N5 Prep',
      duration: '4 Months',
      schedule: 'Tue & Thu (4:00 PM - 6:00 PM)',
      description: 'The starting point for Japanese. Focuses on master scripts (Hiragana, Katakana), 100 essential Kanji, basic greetings, and simple conversational grammar.',
      syllabus: ['Hiragana & Katakana mastery', '100+ Kanji characters', 'Greetings & self-introductions', 'Basic everyday survival dialogues'],
      nextBatch: 'July 6, 2026',
      seatsLeft: 3
    },
    {
      id: 'jp-n4',
      title: 'Japanese N4 Intermediate',
      language: 'Japanese',
      level: 'Intermediate',
      exam: 'JLPT N4 Prep',
      duration: '4 Months',
      schedule: 'Mon & Wed (4:30 PM - 6:30 PM)',
      description: 'Build intermediate fluency. Covers complex grammar (conditionals, potential/passive expressions), 300+ Kanji, and smooth conversational interactions.',
      syllabus: ['300+ Kanji characters', 'Complex verbs & honorific basics', 'Intermediate listening drills', 'Direct & indirect speech forms'],
      nextBatch: 'July 14, 2026',
      seatsLeft: 4
    },
    {
      id: 'jp-n3',
      title: 'Japanese N3 Business & Professional',
      language: 'Japanese',
      level: 'Intermediate',
      exam: 'JLPT N3 Prep',
      duration: '6 Months',
      schedule: 'Sat & Sun (10:00 AM - 1:00 PM)',
      description: 'Master advanced, professional Japanese. Extensive preparation in Keigo (business honorifics), complex literature, and official exam strategies.',
      syllabus: ['650+ Kanji & 3,000 vocab words', 'Keigo (Business Honorifics)', 'Reading newspaper columns', 'Intense mock testing'],
      nextBatch: 'July 20, 2026',
      seatsLeft: 2
    },
    {
      id: 'es-a1',
      title: 'Spanish A1 Elite',
      language: 'Spanish',
      level: 'Beginner',
      exam: 'DELE A1 / SIELE Prep',
      duration: '4 Months',
      schedule: 'Tue & Thu (11:00 AM - 1:00 PM)',
      description: 'Establish your Spanish foundation. Develop basic sentence structure in the present tense, master daily vocabulary, and learn essential conversation.',
      syllabus: ['Alphabet & pronunciation rules', 'Present tense conjugation', 'Describe personality, home & hobbies', 'Basic shopping & dining dialogues'],
      nextBatch: 'July 8, 2026',
      seatsLeft: 5
    },
    {
      id: 'es-a2',
      title: 'Spanish A2 Intensive',
      language: 'Spanish',
      level: 'Beginner',
      exam: 'DELE A2 / SIELE Prep',
      duration: '4 Months',
      schedule: 'Mon & Wed (2:00 PM - 4:00 PM)',
      description: 'Take your Spanish to the next level. Master past and future tenses, talk about memories, plans, and build solid speech patterns for everyday interactions.',
      syllabus: ['Past tenses (Indefinido & Imperfecto)', 'Making future plans & travel setups', 'Expressing preferences & giving tips', 'Listening to colloquial audios'],
      nextBatch: 'July 15, 2026',
      seatsLeft: 3
    },
    {
      id: 'es-b1',
      title: 'Spanish B1 Fluency Booster',
      language: 'Spanish',
      level: 'Intermediate',
      exam: 'DELE B1 / SIELE Prep',
      duration: '5 Months',
      schedule: 'Fri & Sat (4:00 PM - 6:30 PM)',
      description: 'Unlock true speaking freedom. Master the subjunctive mood (subjuntivo) to express doubts, emotions, wishes, and carry out structured debates in Spanish.',
      syllabus: ['Subjunctive mood (Present & Past)', 'Complex conjunctions & style rules', 'Debating current global affairs', 'Professional business writing'],
      nextBatch: 'July 22, 2026',
      seatsLeft: 2
    },
    {
      id: 'en-spoken',
      title: 'Spoken English Accelerator',
      language: 'English',
      level: 'Beginner',
      exam: 'Global Communication',
      duration: '3 Months',
      schedule: 'Mon to Thu (9:30 AM - 10:30 AM)',
      description: 'Conquer your public speaking fears. Improve pronunciation, active listening skills, and gain confidence for interviews, group discussions, and daily calls.',
      syllabus: ['Vocabulary enrichment tools', 'Accent training & neutral speech', 'Resume building & mock interview sessions', 'Extempore & presentation drills'],
      nextBatch: 'July 6, 2026',
      seatsLeft: 6
    },
    {
      id: 'en-business',
      title: 'Business English Excellence',
      language: 'English',
      level: 'Intermediate',
      exam: 'IELTS / Corporate Prep',
      duration: '3 Months',
      schedule: 'Sat & Sun (2:00 PM - 4:30 PM)',
      description: 'Designed for corporate professionals. Learn formal email writing, negotiation tactics, pitching products, and speaking effectively in international boards.',
      syllabus: ['Formal report & email structures', 'Persuasive speaking & pitching', 'Meeting moderation & idioms', 'IELTS/TOEFL standard prep modules'],
      nextBatch: 'July 13, 2026',
      seatsLeft: 4
    },
    {
      id: 'fr-a1',
      title: 'French A1 Foundation',
      language: 'French',
      level: 'Beginner',
      exam: 'DELF A1 Prep',
      duration: '4 Months',
      schedule: 'Tue & Thu (2:00 PM - 4:00 PM)',
      description: 'Fall in love with French. Master the basics of pronunciation, genders, articles, fundamental conjugations, and essential daily conversational skills.',
      syllabus: ['Accent marks & basic vowels', 'Core auxiliary verbs (être/avoir)', 'Daily shopping & weather conversation', 'Cultural introductions of France'],
      nextBatch: 'July 10, 2026',
      seatsLeft: 3
    },
    {
      id: 'de-a1',
      title: 'German A1 Foundation',
      language: 'German',
      level: 'Beginner',
      exam: 'Goethe Zertifikat A1',
      duration: '4 Months',
      schedule: 'Wed & Fri (11:00 AM - 1:00 PM)',
      description: 'Start your journey with German grammar. Understand cases (Nominative/Accusative), basic greetings, spelling conventions, and standard sentence word orders.',
      syllabus: ['Pronunciation & alphabet rules', 'Nominativ & Akkusativ cases', 'Basic present tense verbs', 'Asking directions & booking rooms'],
      nextBatch: 'July 12, 2026',
      seatsLeft: 5
    }
  ];
  const getLanguageColor = (lang) => {
    switch (lang) {
      case 'Japanese': return '#C57B57';
      case 'Spanish': return '#5B7265';
      case 'English': return '#61727A';
      case 'French': return '#b5847e';
      case 'German': return '#bda07b';
      default: return 'var(--color-text)';
    }
  };
  const filteredCourses = courses.filter((course) => {
    const langMatch = selectedLanguage === 'All' || course.language === selectedLanguage;
    const lvlMatch = selectedLevel === 'All' || course.level === selectedLevel;
    return langMatch && lvlMatch;
  });

  return (
    <section className="section animate-fade-up" style={styles.section}>
      <div className="container">
        
        {/* Section Header */}
        <div style={styles.sectionHeader}>
          <span style={styles.sectionSub}>Curriculum Catalog</span>
          <h2 style={styles.sectionTitle}>Our Language Programs</h2>
          <p style={styles.sectionIntro}>
            All language courses are taught by expert certified tutors with a focus on real-world fluency and official certification support.
          </p>
        </div>

        {/* Filters */}
        <div style={styles.filterContainer}>
          <div style={styles.filterGroup}>
            <span style={styles.filterLabel}>Language:</span>
            <div style={styles.filterButtons}>
              {languages.map((lang) => {
                const isSelected = selectedLanguage === lang;
                const activeColor = getLanguageColor(lang);
                return (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    style={{
                      ...styles.filterBtn,
                      backgroundColor: isSelected ? activeColor : 'transparent',
                      color: isSelected ? 'var(--color-white)' : 'var(--color-text)',
                      borderColor: isSelected ? activeColor : 'var(--color-border)'
                    }}
                  >
                    {lang}
                  </button>
                );
              })}
            </div>
          </div>

          <div style={styles.filterGroup}>
            <span style={styles.filterLabel}>Level:</span>
            <div style={styles.filterButtons}>
              {levels.map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  style={{
                    ...styles.filterBtn,
                    backgroundColor: selectedLevel === lvl ? 'var(--color-text)' : 'transparent',
                    color: selectedLevel === lvl ? 'var(--color-bg)' : 'var(--color-text)',
                    borderColor: selectedLevel === lvl ? 'var(--color-text)' : 'var(--color-border)'
                  }}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Course Count */}
        <div style={styles.resultsBar}>
          Showing {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'}
        </div>

        {/* Course Grid */}
        <div style={styles.coursesGrid}>
          {filteredCourses.map((course) => {
            const courseColor = getLanguageColor(course.language);
            return (
              <div key={course.id} style={{ ...styles.courseCard, borderTop: `4px solid ${courseColor}` }}>
                <div style={styles.cardHeader}>
                  <span style={{ ...styles.cardLanguage, color: courseColor }}>{course.language}</span>
                  <span style={styles.cardLevelBadge}>{course.level}</span>
                </div>

              <h3 style={styles.cardTitle}>{course.title}</h3>
              <p style={styles.cardDescription}>{course.description}</p>

              {/* Course Meta Info */}
              <div style={styles.metaGrid}>
                <div style={styles.metaItem}>
                  <Clock size={14} style={styles.metaIcon} />
                  <span>{course.duration}</span>
                </div>
                <div style={styles.metaItem}>
                  <Award size={14} style={styles.metaIcon} />
                  <span>{course.exam}</span>
                </div>
                <div style={{ ...styles.metaItem, gridColumn: 'span 2' }}>
                  <Calendar size={14} style={styles.metaIcon} />
                  <span style={styles.metaText}>{course.schedule}</span>
                </div>
              </div>

              {/* Batch Availability Indicator */}
              <div style={styles.availabilityRow}>
                <span style={styles.batchDate}>Next Batch: <strong>{course.nextBatch}</strong></span>
                <span style={styles.seatsLeft}>Only <strong>{course.seatsLeft} seats</strong> left!</span>
              </div>

              {/* Syllabus Preview */}
              <div style={styles.syllabusBox}>
                <span style={styles.syllabusHeader}>Syllabus Highlights:</span>
                <ul style={styles.syllabusList}>
                  {course.syllabus.slice(0, 3).map((item, idx) => (
                    <li key={idx} style={styles.syllabusItem}>
                      <ShieldCheck size={12} color={courseColor} style={{ marginRight: '6px', flexShrink: 0, marginTop: '3px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Action */}
              <div style={styles.cardFooter}>
                <button
                  className="btn btn-primary"
                  style={{ 
                    width: '100%', 
                    fontSize: '0.85rem',
                    background: courseColor,
                    borderColor: courseColor 
                  }}
                  onClick={() => onBookCourse(course.language, course.title)}
                >
                  Book Free Demo Class
                </button>
              </div>
            </div>
            );
          })}
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
    marginBottom: '4rem',
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
  filterContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    backgroundColor: 'var(--color-bg-alt)',
    border: '1px solid var(--color-border)',
    borderRadius: '4px',
    padding: '2rem',
    marginBottom: '2rem',
  },
  filterGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },
  filterLabel: {
    fontSize: '0.85rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: 'var(--color-text-muted)',
    minWidth: '90px',
  },
  filterButtons: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  filterBtn: {
    background: 'none',
    border: '1px solid var(--color-border)',
    borderRadius: '4px',
    padding: '0.4rem 1rem',
    fontSize: '0.85rem',
    cursor: 'pointer',
    fontFamily: 'var(--font-sans)',
    fontWeight: '500',
    transition: 'var(--transition-editorial)',
  },
  resultsBar: {
    fontSize: '0.85rem',
    color: 'var(--color-text-muted)',
    marginBottom: '2.5rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  coursesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
    gap: '2rem',
  },
  courseCard: {
    backgroundColor: 'var(--color-white)',
    border: '1px solid var(--color-border)',
    borderRadius: '4px',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: 'var(--shadow-sm)',
    transition: 'var(--transition-editorial)',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  cardLanguage: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'var(--color-accent)',
    fontWeight: '600',
  },
  cardLevelBadge: {
    fontSize: '0.7rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: 'var(--color-text-muted)',
    backgroundColor: 'var(--color-bg-alt)',
    border: '1px solid var(--color-border)',
    padding: '0.2rem 0.6rem',
    borderRadius: '2px',
  },
  cardTitle: {
    fontSize: '1.6rem',
    marginBottom: '0.75rem',
    lineHeight: '1.2',
  },
  cardDescription: {
    fontSize: '0.9rem',
    color: 'var(--color-text-muted)',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    flexGrow: 1,
  },
  metaGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '0.75rem',
    borderTop: '1px solid var(--color-border)',
    borderBottom: '1px solid var(--color-border)',
    padding: '1.25rem 0',
    marginBottom: '1.25rem',
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.8rem',
    color: 'var(--color-text-muted)',
  },
  metaIcon: {
    color: 'var(--color-accent)',
    marginRight: '8px',
    flexShrink: 0,
  },
  metaText: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  availabilityRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.8rem',
    marginBottom: '1.25rem',
    borderBottom: '1px dotted var(--color-border)',
    paddingBottom: '0.75rem',
    marginTop: '0.25rem',
  },
  batchDate: {
    color: 'var(--color-text-muted)',
  },
  seatsLeft: {
    color: '#b23b3b',
    fontWeight: '600',
  },
  syllabusBox: {
    backgroundColor: '#faf8f4',
    padding: '1rem',
    borderRadius: '4px',
    border: '1px solid var(--color-border)',
    marginBottom: '1.5rem',
  },
  syllabusHeader: {
    display: 'block',
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: 'var(--color-text)',
    fontWeight: '600',
    marginBottom: '0.5rem',
  },
  syllabusList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  syllabusItem: {
    display: 'flex',
    alignItems: 'flex-start',
    fontSize: '0.8rem',
    color: 'var(--color-text-muted)',
    lineHeight: '1.3',
  },
  cardFooter: {
    marginTop: 'auto',
  }
};

// CSS Injection for cards responsiveness
const catalogStyleTag = document.createElement('style');
catalogStyleTag.innerHTML = `
  #root div[style*="courseCard"]:hover {
    border-color: var(--color-text) !important;
    transform: translateY(-4px);
    box-shadow: var(--shadow-md) !important;
  }
  @media (max-width: 768px) {
    #root div[style*="filterGroup"] {
      flex-direction: column !important;
      align-items: flex-start !important;
      gap: 0.5rem !important;
    }
    #root div[style*="filterContainer"] {
      padding: 1rem !important;
    }
    #root div[style*="coursesGrid"] {
      grid-template-columns: 1fr !important;
    }
  }
`;
document.head.appendChild(catalogStyleTag);
