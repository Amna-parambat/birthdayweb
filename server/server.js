import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Letter from './models/Letter.js';
import Photo from './models/Photo.js';
import Thought from './models/Thought.js';
import Crochet from './models/Crochet.js';
import Wish from './models/Wish.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let isMongoConnected = false;

// Fallback Memory Database State
const fallbackStore = {
  letter: {
    recipient: 'Minh Ha',
    title: 'A Letter for You',
    content: `Dear Minh Ha,\n\nHappy Birthday! 🎉\n\nOn your special day, I want you to know how truly wonderful and inspiring you are. Watching you dream, create, and build your passion—especially starting and building your lovely crochet venture—fills my heart with so much pride and happiness.\n\nYou bring so much light, warmth, and artistic beauty into this world. May this new year of your life be overflowing with endless laughter, cozy moments, blooming creativity, and all the success you deserve.\n\nKeep shining bright and crafting beautiful memories, one stitch at a time!\n\nLots of love always,`,
    sender: 'Amna & Loveup'
  },
  photos: Array.from({ length: 9 }).map((_, i) => ({
    _id: `photo_${i + 1}`,
    title: [
      'Golden Sunset Smiles',
      'Cozy Coffee & Crocheting',
      'Unforgettable Birthday Laughs',
      'Handcrafted Yarn Magic',
      'Sweet Memories & Flowers',
      'Dreaming Big Dreams',
      'Cherished Moments',
      'Artistic Spirit',
      'Sparkle & Joy'
    ][i],
    caption: [
      'Radiant sunshine on a beautiful day with Minh Ha ✨',
      'Soft pastel yarns and warm morning tea ☕🌸',
      'Laughter that makes our hearts full 💕',
      'Creating adorable plushies with endless care 🧶',
      'Blooming bright just like spring blossoms 🌷',
      'Every step forward is worth celebrating 🌟',
      'Side by side through every adventure 💫',
      'Unmatched passion and creative heart 🎀',
      'Cheers to another fantastic year ahead! 🥂'
    ][i],
    imageUrl: `https://images.unsplash.com/photo-${[
      '1534528741775-53994a69daeb',
      '1517841905240-472988babdf9',
      '1524504388940-b1c1722653e1',
      '1584992236310-6edddc08acff',
      '1529626455594-4ff0802cfb7e',
      '1494790108377-be9c29b29330',
      '1517841905240-472988babdf9',
      '1534528741775-53994a69daeb',
      '1524504388940-b1c1722653e1'
    ][i]}?auto=format&fit=crop&w=600&q=80`
  })),
  thoughts: [
    { _id: 'th_1', idNumber: 1, title: 'Inner Strength', message: 'You possess a calm, graceful strength that inspires everyone around you.', icon: 'sparkles' },
    { _id: 'th_2', idNumber: 2, title: 'Boundless Passion', message: 'Your dedication to your craft and dreams is truly magical to witness.', icon: 'heart' },
    { _id: 'th_3', idNumber: 3, title: 'Pure Kindness', message: 'The world is a gentler, happier place because of your thoughtful heart.', icon: 'sun' },
    { _id: 'th_4', idNumber: 4, title: 'Artistic Genius', message: 'Your hands bring yarn to life in the sweetest, most creative ways!', icon: 'flower' },
    { _id: 'th_5', idNumber: 5, title: 'Bright Future', message: 'Every single goal you set your mind to, you achieve with poise and beauty.', icon: 'star' },
    { _id: 'th_6', idNumber: 6, title: 'Loved Beyond Measure', message: 'Never forget how deeply appreciated, cherished, and loved you are!', icon: 'gift' }
  ],
  crochet: {
    title: 'Proud of You!',
    subtitle: 'Started & Building Crochet',
    instaHandle: '@eloraloops',
    instaLink: 'https://www.instagram.com/eloraloops/',
    message: 'So incredibly proud of your courage and talent in starting your own crochet business! From selecting soft threads to crafting plush cute creations, your passion inspires us all.',
    items: [
      { id: 1, name: 'Handmade Amigurumi Bears', tag: 'Best Seller', image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=500&q=80' },
      { id: 2, name: 'Pastel Bunny Plushie', tag: 'New Design', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=500&q=80' },
      { id: 3, name: 'Cozy Floral Coaster Set', tag: 'Handcrafted', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=500&q=80' }
    ]
  },
  wishes: [
    { _id: 'w_1', author: 'Amna', message: 'Happy Birthday Minh Ha! So lucky to have you in my life. Love you lots! 💖', emoji: '🎉', createdAt: new Date() },
    { _id: 'w_2', author: 'Loveup Team', message: 'Wishing you a magnificent birthday filled with joy and sweet surprises! ✨', emoji: '🎂', createdAt: new Date() },
    { _id: 'w_3', author: 'Your Besties', message: 'May your crochet business bloom & your year be filled with happiness! 🧶💖', emoji: '🎀', createdAt: new Date() }
  ]
};

// Seed MongoDB if connected
const seedDatabaseIfNeeded = async () => {
  if (!isMongoConnected) return;
  try {
    const letterCount = await Letter.countDocuments();
    if (letterCount === 0) {
      await Letter.create(fallbackStore.letter);
      await Photo.insertMany(fallbackStore.photos);
      await Thought.insertMany(fallbackStore.thoughts);
      await Crochet.create({
        title: fallbackStore.crochet.title,
        description: fallbackStore.crochet.message,
        imageUrl: fallbackStore.crochet.items[0].image,
        instagramUrl: fallbackStore.crochet.instaLink
      });
      await Wish.insertMany(fallbackStore.wishes);
      console.log('[Database Seeded]: Initialized MongoDB with sketch seed data');
    }
  } catch (err) {
    console.error('Seeding error:', err);
  }
};

// API Endpoints

// 1. Birthday Letter Endpoint
app.get('/api/letter', async (req, res) => {
  if (isMongoConnected) {
    try {
      const letter = await Letter.findOne();
      return res.json(letter || fallbackStore.letter);
    } catch (e) {
      return res.json(fallbackStore.letter);
    }
  }
  res.json(fallbackStore.letter);
});

// 2. Photos Grid Endpoint (9 photos)
app.get('/api/photos', async (req, res) => {
  if (isMongoConnected) {
    try {
      const photos = await Photo.find().sort({ createdAt: -1 });
      return res.json(photos.length ? photos : fallbackStore.photos);
    } catch (e) {
      return res.json(fallbackStore.photos);
    }
  }
  res.json(fallbackStore.photos);
});

// 3. Positive Thoughts Endpoint (6 envelopes)
app.get('/api/thoughts', async (req, res) => {
  if (isMongoConnected) {
    try {
      const thoughts = await Thought.find().sort({ idNumber: 1 });
      return res.json(thoughts.length ? thoughts : fallbackStore.thoughts);
    } catch (e) {
      return res.json(fallbackStore.thoughts);
    }
  }
  res.json(fallbackStore.thoughts);
});

// 4. Crochet Business Spotlight Endpoint
app.get('/api/crochet', async (req, res) => {
  if (isMongoConnected) {
    try {
      const crochet = await Crochet.findOne();
      if (crochet) {
        return res.json({
          title: crochet.title,
          message: crochet.description,
          instaHandle: '@eloraloops',
          instaLink: crochet.instagramUrl,
          items: fallbackStore.crochet.items
        });
      }
    } catch (e) {
      return res.json(fallbackStore.crochet);
    }
  }
  res.json(fallbackStore.crochet);
});

// 5. Guestbook Wishes Endpoints (GET & POST)
app.get('/api/wishes', async (req, res) => {
  if (isMongoConnected) {
    try {
      const wishes = await Wish.find().sort({ createdAt: -1 });
      return res.json(wishes.length ? wishes : fallbackStore.wishes);
    } catch (e) {
      return res.json(fallbackStore.wishes);
    }
  }
  res.json(fallbackStore.wishes);
});

app.post('/api/wishes', async (req, res) => {
  const { author, message, emoji } = req.body;
  if (!author || !message) {
    return res.status(400).json({ error: 'Author and message are required' });
  }

  const newWishData = {
    _id: `w_${Date.now()}`,
    author: author.trim(),
    message: message.trim(),
    emoji: emoji || '💖',
    createdAt: new Date()
  };

  if (isMongoConnected) {
    try {
      const created = await Wish.create(newWishData);
      return res.status(201).json(created);
    } catch (e) {
      console.warn('Mongo wish insert fallback:', e.message);
    }
  }

  fallbackStore.wishes.unshift(newWishData);
  res.status(201).json(newWishData);
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', mongo: isMongoConnected, time: new Date() });
});

// Start Server
connectDB().then((connected) => {
  isMongoConnected = connected;
  if (connected) seedDatabaseIfNeeded();
  app.listen(PORT, () => {
    console.log(`[Express Backend Running]: http://localhost:${PORT}`);
  });
});
