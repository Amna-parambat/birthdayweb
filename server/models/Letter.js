import mongoose from 'mongoose';

const letterSchema = new mongoose.Schema({
  recipient: { type: String, default: 'Minh Ha' },
  title: { type: String, default: 'A Letter for You' },
  content: { type: String, required: true },
  sender: { type: String, default: 'Amna & Loveup' },
  date: { type: Date, default: Date.now }
});

export default mongoose.models.Letter || mongoose.model('Letter', letterSchema);
