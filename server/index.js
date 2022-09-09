import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// import postRoutes from './routes/posts.js';
import authenticationRoutes from './routes/authentication.js'

//Routes

const app = express();

app.use('/authentication', authenticationRoutes)
// app.use('/posts', postRoutes);

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

dotenv.config()
const PORT = process.env.PORT || 5000;

mongoose
.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
.catch((error) => console.log(error.message));


// usage of routes
