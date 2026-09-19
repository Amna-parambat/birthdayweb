import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LetterSection from './components/LetterSection';
import PhotoGallery from './components/PhotoGallery';
import ThoughtCards from './components/ThoughtCards';
import CrochetSpotlight from './components/CrochetSpotlight';

import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

// Import local static data (No backend API needed)
import { letterData } from './data/letters';
import { photoData } from './data/photos';
import { thoughtsData } from './data/thoughts';
import { crochetData } from './data/crochet';


export default function App() {
  const [letter] = useState(letterData);
  const [photo] = useState(photoData);
  const [thoughts] = useState(thoughtsData);
  const [crochet] = useState(crochetData);


  return (
    <div style={{ position: 'relative' }}>
      {/* Background Floating Sparkle Elements */}
      <div className="bg-sparkles">
        <div className="sparkle-dot" style={{ top: '15%', left: '8%', width: '12px', height: '12px', animationDelay: '0s' }}></div>
        <div className="sparkle-dot" style={{ top: '35%', left: '88%', width: '16px', height: '16px', animationDelay: '2s' }}></div>
        <div className="sparkle-dot" style={{ top: '60%', left: '12%', width: '10px', height: '10px', animationDelay: '4s' }}></div>
        <div className="sparkle-dot" style={{ top: '80%', left: '75%', width: '14px', height: '14px', animationDelay: '1s' }}></div>
      </div>

      <div className="container">
        {/* Header with Dragonfly Icon Motif */}
        <Header />

        {/* Hero Section: "Happy Birthday Minha.." */}
        <HeroSection />

        {/* 1. Letter Section: "A letter for you" -> Wax seal envelope -> Line paper modal + Back button */}
        <LetterSection letter={letter} />

        {/* 2. Elegant Portrait & Quote Frame */}
        <PhotoGallery photo={photo} />

        {/* 3. Cards Section: 6 Mini-envelopes "cards -> click" revealing positive thoughts */}
        <ThoughtCards thoughts={thoughts} />

        {/* 4. Crochet Business Spotlight: "proud of you... started and building crochet 📷 insta id" */}
        <CrochetSpotlight crochetData={crochet} />


      </div>

      {/* Footer: "Lots of love from Amna & Loveup" */}
      <Footer />

      {/* Subtle Background Birthday Music Control */}
      <MusicPlayer />
    </div>
  );
}
