import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import resourceRouter from './routes/resources';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.DB_CONN_URL || '';

// Middleware
app.use(
	cors({
		origin: process.env.CLIENT_URL || 'http://localhost:3000', // Allow the client URL
		methods: ['GET'], // Allowed methods
		allowedHeaders: ['*'] // Allowed headers
	})
);
app.use(bodyParser.json());

// MongoDB connection
mongoose
	.connect(MONGO_URI)
	.then(() => {
		console.log('Connected to MongoDB');
	})
	.catch((error) => {
		console.error('Error connecting to MongoDB:', error);
	});

// Routes
app.use('/api/resources', resourceRouter);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
