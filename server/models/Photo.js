import mongoose from 'mongoose';

const photoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  caption: { type: String, default: '' },
  imageUrl: { type: String, required: true },
  aspectRatio: { type: String, default: '1:1' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Photo || mongoose.model('Photo', photoSchema);
