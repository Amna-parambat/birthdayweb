import React from 'react';
import { Heart, Instagram, Linkedin, Globe, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* Handwritten Sign-off matching sketch */}
        <h3 className="footer-love-text">
          Lots of love from Amna & Team LevelUp💕
        </h3>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '16px' }}>
          Crafted with care for Minha's 20th Birthday✨
        </p>

        {/* Social Icons row matching sketch bottom icons */}
        <div className="social-icons-row">
          <a href="https://www.instagram.com/amna.thinks/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="Instagram">
            <Instagram size={20} />
          </a>
          <a href="https://www.linkedin.com/in/amna-parambat/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="#" className="social-icon-btn" title="Portfolio / Loveup">
            <Globe size={20} />
          </a>
        </div>

        <div style={{ marginTop: '24px', fontSize: '0.8rem', color: 'var(--text-muted)', opacity: 0.7 }}>
          © {new Date().getFullYear()} Contact on Linkedin for more works like this ✨
        </div>
      </div>
    </footer>
  );
}
