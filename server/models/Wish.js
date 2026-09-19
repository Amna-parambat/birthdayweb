import mongoose from 'mongoose';

const wishSchema = new mongoose.Schema({
  author: { type: String, required: true },
  message: { type: String, required: true },
  emoji: { type: String, default: '💖' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Wish || mongoose.model('Wish', wishSchema);
