import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/splitwise');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));
db.once('open', () => {
  console.log('\nConnected to MongoDB');
});

export default db;