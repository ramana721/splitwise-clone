const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

console.log(process.env.MONO_URI_CLOUD);
mongoose.connect(process.env.MONO_URI_CLOUD)
.then(() => console.log('Connected to MongoDB Atlas Cloud'))
.catch((err) => console.error('Error connecting to MongoDB Atlas:', err));