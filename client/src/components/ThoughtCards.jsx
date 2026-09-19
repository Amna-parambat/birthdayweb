import React, { useState } from 'react';
import { Mail, Sparkles, Heart, Star, Sun, Flower2, Gift } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ThoughtCards({ thoughts = [] }) {
  const [openedCards, setOpenedCards] = useState({});

  const getIcon = (name) => {
    switch (name) {
      case 'sparkles': return <Sparkles size={24} color="var(--pale-violet-red)" />;
      case 'heart': return <Heart size={24} color="var(--pale-violet-red)" fill="var(--pale-violet-light)" />;
      case 'star': return <Star size={24} color="var(--pale-violet-red)" fill="var(--pale-violet-light)" />;
      case 'sun': return <Sun size={24} color="var(--pale-violet-red)" />;
      case 'flower': return <Flower2 size={24} color="var(--pale-violet-red)" />;
      case 'gift': return <Gift size={24} color="var(--pale-violet-red)" />;
      default: return <Heart size={24} color="var(--pale-violet-red)" />;
    }
  };

  const defaultThoughts = [
    { _id: '1', idNumber: 1, title: 'Inner Strength', message: 'You possess a calm, graceful strength that inspires everyone around you.', icon: 'sparkles' },
    { _id: '2', idNumber: 2, title: 'Boundless Passion', message: 'Your dedication to your craft and dreams is truly magical to witness.', icon: 'heart' },
    { _id: '3', idNumber: 3, title: 'Pure Kindness', message: 'The world is a gentler, happier place because of your thoughtful heart.', icon: 'sun' },
    { _id: '4', idNumber: 4, title: 'Artistic Genius', message: 'Your hands bring yarn to life in the sweetest, most creative ways!', icon: 'flower' },
    { _id: '5', idNumber: 5, title: 'Bright Future', message: 'Every single goal you set your mind to, you achieve with poise and beauty.', icon: 'star' },
    { _id: '6', idNumber: 6, title: 'Loved Beyond Measure', message: 'Never forget how deeply appreciated, cherished, and loved you are!', icon: 'gift' }
  ];

  const list = thoughts.length === 6 ? thoughts : defaultThoughts;

  const toggleCard = (id) => {
    setOpenedCards((prev) => {
      const isCurrentlyOpen = prev[id];
      if (!isCurrentlyOpen) {
        confetti({
          particleCount: 30,
          spread: 40,
          origin: { y: 0.7 },
          colors: ['#DB7093', '#FFF0F5']
        });
      }
      return { ...prev, [id]: !isCurrentlyOpen };
    });
  };

  return (
    <section className="content-section">
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h2 className="section-header-title">Cards for You</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          6 little envelopes containing warm positive thoughts (click each to open)
        </p>
      </div>

      {/* 6 Grid Envelopes matching Sketch */}
      <div className="cards-grid-6">
        {list.map((item, idx) => {
          const isOpen = openedCards[item._id || idx];
          return (
            <div 
              key={item._id || idx} 
              className={`mini-envelope-card ${isOpen ? 'opened' : ''}`}
              onClick={() => toggleCard(item._id || idx)}
            >
              {!isOpen ? (
                <>
                  <div className="envelope-mini-icon-box">
                    <Mail size={20} color="var(--pale-violet-red)" />
                  </div>
                  <span className="envelope-card-number">
                    Card #{idx + 1}
                  </span>
                  <span className="envelope-card-hint">
                    click to open
                  </span>
                </>
              ) : (
                <div style={{ animation: 'fadeIn 0.3s ease', width: '100%' }}>
                  <div style={{ marginBottom: '6px' }}>{getIcon(item.icon)}</div>
                  <h4 className="card-thought-title">
                    {item.title}
                  </h4>
                  <p className="card-thought-msg">
                    "{item.message}"
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
