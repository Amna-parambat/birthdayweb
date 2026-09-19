import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export default function Header() {
  return (
    <header className="dragonfly-nav">
      <div className="dragonfly-box">
        {/* Dragonfly motif matching top left of sketch */}
        <svg className="dragonfly-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 20C50 20 48 35 45 60C43 75 48 90 50 95C52 90 57 75 55 60C52 35 50 20 50 20Z" fill="#DB7093" opacity="0.8" />
          <path d="M49 30C35 20 15 15 10 25C5 35 30 40 47 35Z" fill="#E8A7B8" opacity="0.75" />
          <path d="M51 30C65 20 85 15 90 25C95 35 70 40 53 35Z" fill="#E8A7B8" opacity="0.75" />
          <path d="M48 45C38 42 20 42 15 50C10 58 32 55 46 48Z" fill="#F4C2C2" opacity="0.7" />
          <path d="M52 45C62 42 80 42 85 50C90 58 68 55 54 48Z" fill="#F4C2C2" opacity="0.7" />
          <circle cx="50" cy="18" r="4" fill="#DB7093" />
        </svg>
        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '1px' }}>
          20th BIRTHDAY
        </span>
      </div>

      <div className="header-right-badge">
        <span>specially made for you</span>
        <Heart size={15} fill="var(--pale-violet-red)" />
      </div>
    </header>
  );
}
