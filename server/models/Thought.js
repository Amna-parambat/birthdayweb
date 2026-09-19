import mongoose from 'mongoose';

const thoughtSchema = new mongoose.Schema({
  idNumber: { type: Number, required: true },
  title: { type: String, default: 'Positive Thought' },
  message: { type: String, required: true },
  icon: { type: String, default: 'heart' }
});

export default mongoose.models.Thought || mongoose.model('Thought', thoughtSchema);
