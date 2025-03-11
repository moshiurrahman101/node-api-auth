import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth.route.js';
dotenv.config();


const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use("/api/auth/", authRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});




// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});