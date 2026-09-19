import mongoose from 'mongoose';

export const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/minhabirthday';
  
  try {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 2500 // Fail fast to use fallback if Mongo service is down
    });
    console.log(`[MongoDB Connected]: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.warn(`[MongoDB Warning]: Could not connect to local MongoDB (${error.message}). Using hybrid memory fallback storage.`);
    return false;
  }
};
