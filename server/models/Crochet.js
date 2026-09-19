import mongoose from 'mongoose';

const crochetSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  imageUrl: { type: String, required: true },
  instagramUrl: { type: String, default: 'https://instagram.com' }
});

export default mongoose.models.Crochet || mongoose.model('Crochet', crochetSchema);
