import React, { useState } from 'react';
import { Mail, ArrowLeft, Heart, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function LetterSection({ letter }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.5 },
      colors: ['#DB7093', '#FFF0F5']
    });
  };

  const defaultContent = `Dear Minha,

Happy Birthday! 🎉

On your special day, I want you to know how truly wonderful and inspiring you are. Watching you dream, create, and build your passion—especially starting and building your lovely crochet venture—fills my heart with so much pride and happiness.

You bring so much light, warmth, and artistic beauty into this world. May this new year of your life be overflowing with endless laughter, cozy moments, blooming creativity, and all the success you deserve.

Keep shining bright and crafting beautiful memories, one stitch at a time!

Lots of love always,
Amna`;

  const letterText = letter?.content || defaultContent;

  return (
    <section className="content-section letter-envelope-container">
      <h2 className="section-header-title">A letter for you</h2>

      {/* Interactive Envelope Card matching Sketch */}
      <div className="envelope-card" onClick={handleOpen}>
        <div className="envelope-graphic">
          <div className="wax-seal">
            <Heart fill="white" size={24} />
          </div>
        </div>
        <p style={{ fontWeight: 600, color: 'var(--text-dark)' }}>
          {letter?.title || 'A letter for you'}
        </p>
        <span className="click-hint">click to open ✉️</span>
      </div>

      {/* Line Paper Modal with Back Button */}
      {isOpen && (
        <div className="letter-modal-backdrop" onClick={() => setIsOpen(false)}>
          <div className="letter-modal-content" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button className="back-btn" onClick={() => setIsOpen(false)}>
                <ArrowLeft size={18} />
                <span>Back</span>
              </button>
              <div style={{ color: 'var(--pale-violet-red)', display: 'flex', gap: '4px' }}>
                <Sparkles size={20} />
              </div>
            </div>

            <h2 style={{
              fontFamily: 'Sacramento',
              fontSize: '2.5rem',
              color: 'var(--pale-violet-red)',
              marginBottom: '16px',
              borderBottom: '2px dashed var(--pale-violet-light)',
              paddingBottom: '8px'
            }}>
              Dear Minha...
            </h2>

            <div className="letter-body-text">
              {letterText}
            </div>

            <div style={{
              marginTop: '30px',
              textAlign: 'right',
              fontFamily: 'Sacramento',
              fontSize: '2.2rem',
              color: 'var(--pale-violet-red)'
            }}>
              — {letter?.sender || 'Amna'} ❤️
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
