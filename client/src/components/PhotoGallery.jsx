import React, { useState } from 'react';
import { Sparkles, Heart, Quote, Maximize2, X } from 'lucide-react';
import defaultMinhaPhoto from '../assets/minha-photo.png';

export default function PhotoGallery({ photo }) {
  const [isZoomed, setIsZoomed] = useState(false);

  const currentPhoto = photo?.imageUrl || defaultMinhaPhoto;
  const quoteText = photo?.quote || "“A beautiful soul with a heart full of art, grace, and dreams. May your 20th year be as bright and wonderful as your smile.”";
  const authorText = photo?.author || "Happy 20th Birthday, Minha ✨";

  return (
    <section className="content-section" style={{ textAlign: 'center' }}>
      <div className="elegant-portrait-container">
        {/* Floating Sparkle Badge */}
        <div className="portrait-badge">
          <Sparkles size={15} style={{ display: 'inline', marginRight: '6px' }} />
          Birthday Star
        </div>

        {/* Ornate Luxury Photo Frame */}
        <div className="elegant-frame-wrapper" onClick={() => setIsZoomed(true)}>
          <div className="frame-corner corner-top-left"></div>
          <div className="frame-corner corner-top-right"></div>
          <div className="frame-corner corner-bottom-left"></div>
          <div className="frame-corner corner-bottom-right"></div>

          <div className="elegant-frame-inner">
            <div className="frame-image-container">
              <img 
                src={currentPhoto} 
                alt="Minha Birthday Portrait" 
                className="elegant-frame-image"
              />
              <div className="frame-hover-overlay">
                <Maximize2 size={22} color="#ffffff" />
                <span>View Full Portrait</span>
              </div>
            </div>
          </div>
        </div>

        {/* Elegant Quote Card Under Photo */}
        <div className="quote-card-under-photo">
          <div className="quote-icon-bubble">
            <Quote size={20} color="var(--pale-violet-dark)" />
          </div>

          <blockquote className="portrait-quote-text">
            {quoteText}
          </blockquote>

          <div className="quote-author-row">
            <span className="quote-divider-line"></span>
            <span className="quote-author-name">
              <Heart size={14} fill="var(--pale-violet-red)" color="var(--pale-violet-red)" style={{ display: 'inline', marginRight: '6px' }} />
              {authorText}
            </span>
            <span className="quote-divider-line"></span>
          </div>
        </div>
      </div>

      {/* Lightbox / Fullscreen Modal */}
      {isZoomed && (
        <div className="lightbox-modal" onClick={() => setIsZoomed(false)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '550px', background: '#FFF5F7', padding: '16px', borderRadius: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '8px' }}>
              <button 
                onClick={() => setIsZoomed(false)} 
                style={{ background: 'white', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--pale-violet-dark)', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
              >
                <X size={20} />
              </button>
            </div>
            <img 
              src={currentPhoto} 
              alt="Minha Birthday Portrait" 
              style={{ width: '100%', borderRadius: '16px', display: 'block', maxHeight: '75vh', objectFit: 'contain' }}
            />
            <p style={{ marginTop: '14px', fontFamily: 'Playfair Display', fontStyle: 'italic', color: 'var(--text-dark)', fontSize: '1rem', padding: '0 10px' }}>
              {quoteText}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

