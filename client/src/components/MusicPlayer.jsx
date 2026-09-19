import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Audio path prioritizing local client/public/audio/birthday_music.mp3 with soft web fallback
  const primaryAudioPath = `${import.meta.env.BASE_URL}audio/birthday_music.mp3`;
  const fallbackAudioPath = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=happy-birthday-piano-lullaby-112702.mp3";

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // If local audio file fails or missing, switch to fallback web audio
          if (audioRef.current.src !== fallbackAudioPath) {
            audioRef.current.src = fallbackAudioPath;
            audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
          }
        });
    }
  };

  return (
    <div className="music-player-container">
      <audio 
        ref={audioRef} 
        loop 
        src={primaryAudioPath}
        onError={(e) => {
          // Automatic fallback if local MP3 is not yet added in /public/audio/
          e.target.src = fallbackAudioPath;
        }}
      />
      <button
        onClick={toggleMusic}
        className="music-player-btn"
        title={isPlaying ? 'Mute background music' : 'Play soft birthday melody'}
        aria-label="Toggle birthday music"
      >
        {isPlaying ? <Volume2 size={20} /> : <Music size={20} />}
      </button>
    </div>
  );
}
