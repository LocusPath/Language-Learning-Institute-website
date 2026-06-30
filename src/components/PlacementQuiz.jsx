import React, { useState } from 'react';
import { ChevronRight, ArrowLeft, RefreshCw, CheckCircle } from 'lucide-react';

export default function PlacementQuiz({ onBookCourse }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    language: '',
    experience: '',
    goal: '',
    dedication: '',
    focus: '',
  });
  const [result, setResult] = useState(null);

  const questions = [
    {
      key: 'language',
      question: 'Which language are you interested in mastering?',
      options: [
        { value: 'Japanese', label: 'Japanese (日本語)' },
        { value: 'Spanish', label: 'Spanish (Español)' },
        { value: 'English', label: 'English' },
        { value: 'French', label: 'French (Français)' },
        { value: 'German', label: 'German (Deutsch)' }
      ]
    },
    {
      key: 'experience',
      question: 'What is your current level of experience?',
      options: [
        { value: 'beginner', label: 'Complete Beginner (Cannot read/speak anything yet)' },
        { value: 'elementary', label: 'Elementary (Know basic words, scripts like Hiragana or alphabet)' },
        { value: 'intermediate', label: 'Intermediate (Can construct basic sentences and hold simple talks)' },
        { value: 'advanced', label: 'Advanced (Can understand native speakers but need fluency/specialization)' }
      ]
    },
    {
      key: 'goal',
      question: 'What is your primary motivation for learning?',
      options: [
        { value: 'career', label: 'Career Growth (Job opportunities, MNCs, translator jobs)' },
        { value: 'exam', label: 'Official Certification (JLPT, DELE, SIELE, Goethe, IELTS)' },
        { value: 'culture', label: 'Cultural & Travel interest (Enjoying cinema, literature, visiting countries)' },
        { value: 'academic', label: 'Academic Study (School, college, or study abroad requirements)' }
      ]
    },
    {
      key: 'dedication',
      question: 'How many hours can you dedicate to study each week?',
      options: [
        { value: 'light', label: '1 - 2 hours per week (Flexible part-time pacing)' },
        { value: 'regular', label: '3 - 5 hours per week (Standard intensive learning)' },
        { value: 'high', label: '6+ hours per week (Express fast-track progression)' }
      ]
    },
    {
      key: 'focus',
      question: 'What is your preferred focus areas in class?',
      options: [
        { value: 'speaking', label: 'Conversational Fluency (Pronunciation, vocabulary, speaking games)' },
        { value: 'grammar', label: 'Grammar & Writing (Sentence structuring, script reading, written syntax)' },
        { value: 'hybrid', label: 'Balanced Hybrid (Complete exam preparation + daily conversation)' }
      ]
    }
  ];

  const handleSelectOption = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResult({ ...answers, [key]: value });
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateResult = (finalAnswers) => {
    const { language, experience, goal, dedication, focus } = finalAnswers;
    let recommendedLevel = 'A1 / Beginner';
    let courseName = '';
    let duration = '4 Months';
    let highlights = [];

    // Experience mapping
    if (experience === 'beginner') {
      if (language === 'Japanese') {
        recommendedLevel = 'N5 (Beginner)';
        courseName = 'Japanese N5 Foundation Course';
        highlights = [
          'Master Hiragana, Katakana, and basic Kanji (approx. 100 characters).',
          'Learn basic greetings, shopping terms, and everyday expressions.',
          'Interactive drills for correct pronunciation.'
        ];
      } else if (language === 'Spanish') {
        recommendedLevel = 'A1 (Beginner)';
        courseName = 'Spanish A1 Elite Course';
        highlights = [
          'Formulate simple sentences in present tense.',
          'Master greetings, introducing yourself, and ordering food.',
          'Understand basic cultural traditions.'
        ];
      } else {
        recommendedLevel = 'A1-A2 Basic';
        courseName = `${language} Foundation Course`;
        highlights = [
          'Develop core grammatical foundations.',
          'Build strong essential vocabulary.',
          'Active speaking practice from Day 1.'
        ];
      }
    } else if (experience === 'elementary') {
      if (language === 'Japanese') {
        recommendedLevel = 'N4 (Elementary)';
        courseName = 'Japanese N4 Progression Course';
        highlights = [
          'Master complex sentence structures (conditionals, potential form).',
          'Learn 300+ Kanji and 1,500 vocabulary words.',
          'Engage in casual conversations with native fluency.'
        ];
      } else if (language === 'Spanish') {
        recommendedLevel = 'A2 (Elementary)';
        courseName = 'Spanish A2 Intensive Course';
        highlights = [
          'Master past tenses (Pretérito Indefinido & Imperfecto).',
          'Discuss your childhood, describe past experiences, and make future plans.',
          'Enhance listening comprehension of native Spanish speech.'
        ];
      } else {
        recommendedLevel = 'A2 Upper Elementary';
        courseName = `${language} Intermediate Accelerator`;
        highlights = [
          'Expand conversational comfort zone.',
          'Target practical speaking modules.',
          'Understand medium-complexity texts.'
        ];
      }
    } else {
      // Intermediate / Advanced
      if (language === 'Japanese') {
        recommendedLevel = 'N3 (Intermediate)';
        courseName = 'Japanese N3 Business & Professional';
        duration = '6 Months';
        highlights = [
          'Learn honorific Japanese (Keigo) for professional environments.',
          'Master 600+ Kanji and complex grammar structures.',
          'Prepare extensively for the JLPT N3 official exam.'
        ];
      } else if (language === 'Spanish') {
        recommendedLevel = 'B1 (Intermediate)';
        courseName = 'Spanish B1 Fluency Booster';
        duration = '5 Months';
        highlights = [
          'Express doubts, hopes, emotions, and hypothetical situations using Subjunctive.',
          'Learn topic-based advanced vocabulary (politics, work, environmental topics).',
          'Achieve fluency to express complex opinions clearly.'
        ];
      } else {
        recommendedLevel = 'B1-B2 Intermediate';
        courseName = `${language} Professional Mastery`;
        duration = '5 Months';
        highlights = [
          'Professional writing, idioms, and speech patterns.',
          'Negotiations and business conversation etiquettes.',
          'Exam preparation models.'
        ];
      }
    }

    setResult({
      language,
      recommendedLevel,
      courseName,
      duration,
      highlights,
      frequency: dedication === 'high' ? '3 times/week (Intensive)' : '2 times/week (Regular)',
    });
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({
      language: '',
      experience: '',
      goal: '',
      dedication: '',
      focus: '',
    });
    setResult(null);
  };

  return (
    <section className="section animate-fade-up" style={styles.section}>
      <div className="container">
        
        {/* Header Text */}
        <div style={styles.sectionHeader}>
          <span style={styles.sectionSub}>Find your path</span>
          <h2 style={styles.sectionTitle}>Language Placement Assessment</h2>
          <p style={styles.sectionIntro}>
            Take our 1-minute interactive quiz to discover the perfect course level and schedule for your language goals.
          </p>
        </div>

        {/* Quiz Box */}
        <div style={styles.quizBox}>
          {!result ? (
            <div>
              {/* Progress Bar */}
              <div style={styles.progressBarBg}>
                <div 
                  style={{ 
                    ...styles.progressBarFill, 
                    width: `${((currentStep) / questions.length) * 100}%` 
                  }} 
                />
              </div>

              {/* Navigation Back */}
              <div style={styles.quizNav}>
                {currentStep > 0 ? (
                  <button onClick={handlePrevStep} style={styles.backButton}>
                    <ArrowLeft size={16} style={{ marginRight: '6px' }} /> Back
                  </button>
                ) : (
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Question {currentStep + 1} of {questions.length}</span>
                )}
              </div>

              {/* Question Text */}
              <h3 style={styles.questionText}>{questions[currentStep].question}</h3>

              {/* Options Grid */}
              <div style={styles.optionsGrid}>
                {questions[currentStep].options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSelectOption(questions[currentStep].key, option.value)}
                    style={styles.optionCard}
                  >
                    <span style={styles.optionLabel}>{option.label}</span>
                    <ChevronRight size={18} style={styles.optionIcon} />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Result Panel */
            <div style={styles.resultPanel}>
              <div style={styles.resultHeader}>
                <CheckCircle size={48} color="var(--color-sage)" style={{ marginBottom: '1rem' }} />
                <span style={styles.resultBadge}>Assessment Completed</span>
                <h3 style={styles.resultTitle}>{result.courseName}</h3>
                <p style={styles.resultSubtitle}>Recommended Level: <strong>{result.recommendedLevel}</strong></p>
              </div>

              <div style={styles.resultDetailsGrid}>
                <div style={styles.detailCard}>
                  <span style={styles.detailLabel}>Course Duration</span>
                  <span style={styles.detailVal}>{result.duration}</span>
                </div>
                <div style={styles.detailCard}>
                  <span style={styles.detailLabel}>Target Language</span>
                  <span style={styles.detailVal}>{result.language}</span>
                </div>
                <div style={styles.detailCard}>
                  <span style={styles.detailLabel}>Weekly Schedule</span>
                  <span style={styles.detailVal}>{result.frequency}</span>
                </div>
              </div>

              <div style={styles.highlightsBox}>
                <h4 style={styles.highlightsTitle}>What you will master:</h4>
                <ul style={styles.highlightsList}>
                  {result.highlights.map((highlight, index) => (
                    <li key={index} style={styles.highlightItem}>
                      <span style={styles.checkMarker}>✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={styles.resultActions}>
                <button 
                  className="btn btn-accent" 
                  onClick={() => onBookCourse(result.language, result.courseName)}
                  style={{ flex: 1 }}
                >
                  Book Free Demo Class
                </button>
                <button 
                  className="btn btn-secondary" 
                  onClick={handleReset}
                  style={styles.resetBtn}
                >
                  <RefreshCw size={14} style={{ marginRight: '6px' }} /> Retake Quiz
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: 'var(--color-bg-alt)',
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
  quizBox: {
    maxWidth: '700px',
    margin: '0 auto',
    backgroundColor: 'var(--color-white)',
    border: '1px solid var(--color-border)',
    borderRadius: '4px',
    padding: '3rem',
    boxShadow: 'var(--shadow-sm)',
  },
  progressBarBg: {
    width: '100%',
    height: '4px',
    backgroundColor: '#eae3d5',
    borderRadius: '2px',
    marginBottom: '2rem',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: 'var(--color-accent)',
    borderRadius: '2px',
    transition: 'width 0.4s ease',
  },
  quizNav: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: '1.5rem',
    height: '24px',
  },
  backButton: {
    display: 'flex',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    fontSize: '0.85rem',
    color: 'var(--color-text-muted)',
    cursor: 'pointer',
    padding: 0,
    fontFamily: 'var(--font-sans)',
  },
  questionText: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.8rem',
    fontWeight: '400',
    marginBottom: '2.5rem',
    color: 'var(--color-text)',
    lineHeight: '1.3',
  },
  optionsGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.85rem',
  },
  optionCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.25rem 1.5rem',
    backgroundColor: 'var(--color-white)',
    border: '1px solid var(--color-border)',
    borderRadius: '4px',
    cursor: 'pointer',
    textAlign: 'left',
    fontFamily: 'var(--font-sans)',
    transition: 'var(--transition-editorial)',
  },
  optionLabel: {
    fontSize: '0.95rem',
    color: 'var(--color-text)',
    fontWeight: '400',
  },
  optionIcon: {
    color: 'var(--color-border-hover)',
    transition: 'transform 0.3s ease, color 0.3s ease',
  },
  resultPanel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  resultHeader: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  resultBadge: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'var(--color-sage)',
    fontWeight: '600',
    display: 'block',
    marginBottom: '0.5rem',
  },
  resultTitle: {
    fontSize: '2.2rem',
    marginBottom: '0.5rem',
  },
  resultSubtitle: {
    fontSize: '0.95rem',
    color: 'var(--color-text-muted)',
  },
  resultDetailsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
    width: '100%',
    marginBottom: '2rem',
  },
  detailCard: {
    backgroundColor: 'var(--color-bg-alt)',
    border: '1px solid var(--color-border)',
    borderRadius: '4px',
    padding: '1rem',
    textAlign: 'center',
  },
  detailLabel: {
    display: 'block',
    fontSize: '0.7rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: 'var(--color-text-muted)',
    marginBottom: '0.25rem',
  },
  detailVal: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: 'var(--color-text)',
  },
  highlightsBox: {
    width: '100%',
    backgroundColor: '#faf8f4',
    border: '1px solid var(--color-border)',
    borderRadius: '4px',
    padding: '1.5rem',
    marginBottom: '2rem',
  },
  highlightsTitle: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: 'var(--color-text)',
    marginBottom: '1rem',
    fontWeight: '600',
  },
  highlightsList: {
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  highlightItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.5rem',
    fontSize: '0.9rem',
    color: 'var(--color-text-muted)',
    lineHeight: '1.4',
  },
  checkMarker: {
    color: 'var(--color-sage)',
    fontWeight: 'bold',
  },
  resultActions: {
    display: 'flex',
    gap: '1rem',
    width: '100%',
  },
  resetBtn: {
    padding: '0.875rem 1.5rem',
  }
};

// CSS Injection for dynamic button styling
const optionStyleTag = document.createElement('style');
optionStyleTag.innerHTML = `
  #root div[style*="quizBox"] button[style*="optionCard"]:hover {
    border-color: var(--color-text) !important;
    background-color: var(--color-bg-alt) !important;
  }
  #root div[style*="quizBox"] button[style*="optionCard"]:hover svg {
    transform: translateX(4px);
    color: var(--color-text);
  }
  @media (max-width: 768px) {
    #root div[style*="quizBox"] {
      padding: 1.5rem !important;
    }
    #root div[style*="resultDetailsGrid"] {
      grid-template-columns: 1fr !important;
      gap: 0.75rem !important;
    }
    #root div[style*="resultActions"] {
      flex-direction: column !important;
    }
  }
`;
document.head.appendChild(optionStyleTag);
