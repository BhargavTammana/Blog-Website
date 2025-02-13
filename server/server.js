import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

//components
import Connection from './database/db.js';
import Router from './routes/route.js';

import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);




const PORT = process.env.PORT || 8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


const URL = process.env.MONGODB_URI || `mongodb+srv://${USERNAME}:${PASSWORD}@blog-app.sgxmjxx.mongodb.net/?retryWrites=true&w=majority&appName=blog-app`;
Connection(URL);
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));