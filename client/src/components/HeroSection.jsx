import React from 'react';
import confetti from 'canvas-confetti';

export default function HeroSection() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#DB7093', '#F4C2C2', '#E8A7B8', '#FFF0F5']
    });
  };

  return (
    <section className="hero-section">
      <h1 className="hero-title" onClick={triggerConfetti} title="Click for birthday magic!">
        Happy Birthday Minha.
      </h1>
      <p className="hero-subtitle">A day as special as you are</p>
      <div className="section-divider"></div>
    </section>
  );
}
