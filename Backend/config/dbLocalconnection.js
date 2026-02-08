import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));
db.once('open', () => {
  console.log('\nConnected to Local MongoDB'.bold);
});

export default db;