import React from 'react';
import { Instagram, Sparkles, Heart } from 'lucide-react';
import defaultCrochetImg from '../assets/crochet-tulip.png';

export default function CrochetSpotlight({ crochetData }) {
  const data = crochetData || {
    title: 'Proud of You!',
    subtitle: 'Started & Building Crochet',
    instaHandle: '@eloraloops',
    instaLink: 'https://www.instagram.com/eloraloops/',
    previewImage: defaultCrochetImg,
    message: 'So incredibly proud of your courage, artistry, and heart in starting and building your crochet business! Every handmade stitch carries your love and creativity.'
  };

  const imageSrc = data.previewImage || defaultCrochetImg;

  return (
    <section className="content-section">
      <div className="crochet-box">
        <div className="crochet-layout">
          <div>
            <span className="crochet-badge">
              <Sparkles size={14} style={{ display: 'inline', marginRight: '4px' }} />
              Milestone Spotlight
            </span>
            
            <h2 className="crochet-title">
              Proud of you...
            </h2>
            
            <p style={{ 
              fontFamily: 'Playfair Display', 
              fontSize: '1.25rem', 
              color: 'var(--text-dark)', 
              fontWeight: 600,
              marginBottom: '12px' 
            }}>
              Started & building your crochet business 🧶💖
            </p>

            <p style={{ color: 'var(--text-dark)', fontSize: '0.98rem', lineHeight: '1.6', marginBottom: '20px' }}>
              {data.message || data.description}
            </p>

            {/* Instagram ID tag matching sketch ("📷 insta id") */}
            <a 
              href={data.instaLink || 'https://www.instagram.com/eloraloops/'} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="insta-link-btn"
            >
              <Instagram size={20} />
              <span>{data.instaHandle || '@eloraloops'}</span>
            </a>
          </div>

          <div>
            <div style={{ position: 'relative' }}>
              <img 
                src={imageSrc} 
                alt="Handcrafted Crochet Creations" 
                className="crochet-image-preview"
              />
              <div style={{
                position: 'absolute',
                bottom: '16px',
                right: '16px',
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(6px)',
                padding: '8px 16px',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
                <Heart size={16} fill="var(--pale-violet-red)" color="var(--pale-violet-red)" />
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--pale-violet-dark)' }}>
                  Handmade with Love
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
