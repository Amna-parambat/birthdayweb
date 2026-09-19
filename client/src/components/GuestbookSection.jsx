import React, { useState } from 'react';
import { Send, Heart, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function GuestbookSection({ wishes = [], onAddWish }) {
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('💖');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author.trim() || !message.trim()) return;

    onAddWish({
      author: author.trim(),
      message: message.trim(),
      emoji: selectedEmoji
    });

    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.8 },
      colors: ['#DB7093', '#F4C2C2']
    });

    setAuthor('');
    setMessage('');
  };

  const emojis = ['💖', '🎉', '🎂', '✨', '🎀', '🌸', '🧶', '🌟'];

  return (
    <section className="content-section">
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h2 className="section-header-title">Birthday Wish Wall</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          Leave a sweet birthday message for Minh Ha!
        </p>
      </div>

      {/* Form */}
      <form className="wish-form" onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '6px' }}>
              Your Name
            </label>
            <input 
              type="text"
              className="form-input"
              placeholder="e.g. Amna, Alex..."
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '6px' }}>
              Pick an Icon
            </label>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {emojis.map((em) => (
                <button
                  type="button"
                  key={em}
                  onClick={() => setSelectedEmoji(em)}
                  style={{
                    background: selectedEmoji === em ? 'var(--pink-soft)' : 'transparent',
                    border: selectedEmoji === em ? '2px solid var(--pale-violet-red)' : '1px solid var(--glass-border)',
                    borderRadius: '8px',
                    padding: '4px 8px',
                    cursor: 'pointer',
                    fontSize: '1.1rem'
                  }}
                >
                  {em}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="form-group">
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '6px' }}>
            Your Birthday Wish
          </label>
          <textarea
            className="form-textarea"
            rows="3"
            placeholder="Write your sweet birthday message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          <Send size={16} style={{ display: 'inline', marginRight: '6px' }} />
          Post Birthday Wish
        </button>
      </form>

      {/* Wish Cards Wall */}
      <div className="wish-wall-grid">
        {wishes.map((w, i) => (
          <div key={w._id || i} className="wish-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 700, color: 'var(--pale-violet-dark)', fontSize: '1rem' }}>
                {w.author}
              </span>
              <span style={{ fontSize: '1.2rem' }}>{w.emoji || '💖'}</span>
            </div>
            <p style={{ color: 'var(--text-dark)', fontSize: '0.92rem', lineHeight: '1.5' }}>
              "{w.message}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
