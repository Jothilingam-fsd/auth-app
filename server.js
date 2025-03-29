
const express = require('express');
const dotenv = require('dotenv');


const connectDB = require('./config/db');
const mongoose = require('mongoose');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

mongoose.connect(process.env.MONGO_URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.error('MongoDB connection error:', err));
  

const PORT = process.env.PORT || 5000;
// Removed misplaced object
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
