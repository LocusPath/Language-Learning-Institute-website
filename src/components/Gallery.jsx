import React, { useState } from 'react';
import { Camera, Maximize2, X, FileImage } from 'lucide-react';

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [filter, setFilter] = useState('All');

  const galleryCategories = ['All', 'Campus', 'Classrooms', 'Activities'];

  const photos = [
    {
      id: 'gallery-1',
      title: 'Active Spanish Language Workshop',
      category: 'Classrooms',
      dimensions: '800 x 600 px (Landscape)',
      filename: 'gallery-1.jpg',
      src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
      description: 'Group discussions and interactive exercises in our premium Spanish classroom.'
    },
    {
      id: 'gallery-2',
      title: 'Japanese JLPT Study Circle',
      category: 'Activities',
      dimensions: '600 x 600 px (Square)',
      filename: 'gallery-2.jpg',
      src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
      description: 'Students working together on Japanese Kanji cards and conversation drills.'
    },
    {
      id: 'gallery-3',
      title: 'Locuspath Center Reception',
      category: 'Campus',
      dimensions: '800 x 600 px (Landscape)',
      filename: 'gallery-3.jpg',
      src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
      description: 'Our welcoming reception desk and student orientation area near the central metro.'
    },
    {
      id: 'gallery-4',
      title: 'Certificate Distribution Ceremony',
      category: 'Activities',
      dimensions: '800 x 600 px (Landscape)',
      filename: 'gallery-4.jpg',
      src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
      description: 'Celebrating language milestones as students complete their levels (A1, A2, B1).'
    },
    {
      id: 'gallery-5',
      title: 'Multimedia Language Laboratory',
      category: 'Campus',
      dimensions: '600 x 800 px (Portrait)',
      filename: 'gallery-5.jpg',
      src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
      description: 'Equipped with listening aids and speech training software for student practice.'
    }
  ];

  const filteredPhotos = filter === 'All' ? photos : photos.filter(p => p.category === filter);

  return (
    <section className="section animate-fade-up" style={styles.section}>
      <div className="container">
        
        {/* Section Header */}
        <div style={styles.sectionHeader}>
          <span style={styles.sectionSub}>Campus Gallery</span>
          <h2 style={styles.sectionTitle}>Life at Locuspath</h2>
          <p style={styles.sectionIntro}>
            Explore our training facilities, interactive language workshops, and student events. Click on any photo card to expand.
          </p>
        </div>

        {/* Category Filters */}
        <div style={styles.filterBar}>
          {galleryCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                ...styles.filterBtn,
                color: filter === cat ? 'var(--color-accent)' : 'var(--color-text-muted)',
                borderColor: filter === cat ? 'var(--color-accent)' : 'transparent',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div style={styles.photoGrid}>
          {filteredPhotos.map((photo) => (
            <div 
              key={photo.id} 
              style={styles.photoCard}
              onClick={() => setSelectedPhoto(photo)}
            >
              <div style={styles.placeholderBox}>
                <img src={photo.src} alt={photo.title} style={styles.photoImg} />
                <div style={styles.hoverOverlay}>
                  <Maximize2 size={16} color="var(--color-white)" />
                  <span style={styles.overlayText}>Expand Photo</span>
                </div>
              </div>
              <div style={styles.cardInfo}>
                <span style={styles.categoryBadge}>{photo.category}</span>
                <p style={styles.cardDesc}>{photo.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Modal */}
        {selectedPhoto && (
          <div style={styles.modalOverlay} onClick={() => setSelectedPhoto(null)}>
            <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button style={styles.closeBtn} onClick={() => setSelectedPhoto(null)}>
                <X size={20} />
              </button>

              <div style={styles.modalGrid}>
                {/* Visual Placeholder */}
                <div style={styles.modalVisual}>
                  <img src={selectedPhoto.src} alt={selectedPhoto.title} style={styles.modalImg} />
                </div>

                 {/* Details */}
                <div style={styles.modalDetails}>
                  <span style={styles.modalSub}>{selectedPhoto.category} Spotlight</span>
                  <h3 style={styles.modalHeaderTitle}>{selectedPhoto.title}</h3>
                  
                  <p style={styles.modalDesc}>
                    {selectedPhoto.description}
                  </p>

                  <div style={styles.eventHighlightBox}>
                    <p style={styles.eventHighlightText}>
                      <strong>Interactive Learning:</strong> Our training workshops, group study circles, and campus seminars are designed to immerse you in foreign cultures and build spoken confidence from day one.
                    </p>
                  </div>

                  <div style={styles.modalActions}>
                    <button 
                      className="btn btn-primary" 
                      onClick={() => setSelectedPhoto(null)}
                      style={{ flex: 1 }}
                    >
                      Close Gallery View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

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
    marginBottom: '3rem',
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
  filterBar: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2.5rem',
    borderBottom: '1px solid var(--color-border)',
    paddingBottom: '1.25rem',
    marginBottom: '3.5rem',
  },
  filterBtn: {
    background: 'none',
    border: 'none',
    borderBottom: '2px solid transparent',
    paddingBottom: '0.5rem',
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    fontWeight: '600',
    cursor: 'pointer',
    fontFamily: 'var(--font-sans)',
    transition: 'var(--transition-editorial)',
  },
  photoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '2.5rem',
  },
  photoCard: {
    border: '1px solid var(--color-border)',
    borderRadius: '4px',
    overflow: 'hidden',
    cursor: 'pointer',
    backgroundColor: 'var(--color-white)',
    boxShadow: 'var(--shadow-sm)',
    transition: 'var(--transition-editorial)',
  },
  placeholderBox: {
    height: '240px',
    border: 'none',
    borderBottom: '1px solid var(--color-border)',
    position: 'relative',
    overflow: 'hidden',
  },
  photoImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  photoTitle: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.2rem',
    fontWeight: '500',
    color: 'var(--color-text)',
    marginBottom: '0.25rem',
  },
  photoFile: {
    fontSize: '0.75rem',
    color: 'var(--color-accent)',
  },
  hoverOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(44, 37, 34, 0.9)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  overlayText: {
    color: 'var(--color-white)',
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  },
  cardInfo: {
    padding: '1.25rem 1.5rem',
  },
  categoryBadge: {
    fontSize: '0.65rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: 'var(--color-text-muted)',
    backgroundColor: 'var(--color-bg-alt)',
    border: '1px solid var(--color-border)',
    padding: '0.2rem 0.5rem',
    borderRadius: '2px',
    display: 'inline-block',
    marginBottom: '0.5rem',
  },
  cardDesc: {
    fontSize: '0.85rem',
    color: 'var(--color-text-muted)',
    lineHeight: '1.5',
  },
  /* Modal Styles */
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(44, 37, 34, 0.6)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    backdropFilter: 'blur(4px)',
  },
  modalContent: {
    backgroundColor: 'var(--color-bg)',
    border: '1px solid var(--color-border)',
    maxWidth: '800px',
    width: '100%',
    position: 'relative',
    borderRadius: '4px',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-md)',
  },
  closeBtn: {
    position: 'absolute',
    top: '1.25rem',
    right: '1.25rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: 'var(--color-text-muted)',
    zIndex: 10,
    padding: '0.25rem',
    borderRadius: '50%',
    backgroundColor: 'rgba(254, 253, 250, 0.9)',
    border: '1px solid var(--color-border)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalGrid: {
    display: 'grid',
    gridTemplateColumns: '1.1fr 1.3fr',
  },
  modalVisual: {
    backgroundColor: 'var(--color-bg-alt)',
    borderRight: '1px solid var(--color-border)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    overflow: 'hidden',
    height: '100%',
    minHeight: '350px',
  },
  modalImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  modalVisualTitle: {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.4rem',
    marginBottom: '0.5rem',
  },
  modalDetails: {
    padding: '3rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  modalSub: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'var(--color-accent)',
    fontWeight: '600',
    display: 'block',
    marginBottom: '0.5rem',
  },
  modalHeaderTitle: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
  },
  eventHighlightBox: {
    backgroundColor: '#faf8f4',
    borderLeft: '3px solid var(--color-accent)',
    padding: '1.25rem',
    borderRadius: '4px',
    fontSize: '0.85rem',
    color: 'var(--color-text-muted)',
    lineHeight: '1.6',
    marginBottom: '2rem',
  },
  eventHighlightText: {
    margin: 0,
  },
  modalActions: {
    display: 'flex',
    gap: '1rem',
  },
  modalDesc: {
    fontSize: '0.9rem',
    color: 'var(--color-text-muted)',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
  }
};

// CSS Injection for hover actions & responsiveness
const galleryStyleTag = document.createElement('style');
galleryStyleTag.innerHTML = `
  #root div[style*="photoCard"]:hover {
    border-color: var(--color-text) !important;
    box-shadow: var(--shadow-md) !important;
  }
  #root div[style*="photoCard"]:hover div[style*="hoverOverlay"] {
    opacity: 1 !important;
  }
  @media (max-width: 768px) {
    #root div[style*="modalGrid"] {
      grid-template-columns: 1fr !important;
    }
    #root div[style*="modalVisual"] {
      border-right: none !important;
      border-bottom: 1px solid var(--color-border) !important;
      padding: 2rem !important;
    }
    #root div[style*="modalDetails"] {
      padding: 2rem !important;
    }
  }
`;
document.head.appendChild(galleryStyleTag);
