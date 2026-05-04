const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static files from 'dist' (Vite build) and 'public' (assets)
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
const contactHandler = require('./api/contact');
const helloHandler = require('./api/hello');
const messagesHandler = require('./api/messages');

const vercelToExpress = (handler) => {
    return async (req, res) => {
        try {
            await handler(req, res);
        } catch (error) {
            console.error('API Error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    };
};

app.post('/api/contact', vercelToExpress(contactHandler));
app.get('/api/hello', vercelToExpress(helloHandler));
app.get('/api/messages', vercelToExpress(messagesHandler));

// Handle client-side routing: serve index.html for all non-API routes
app.get('*', (req, res) => {
    // Try dist/index.html first (production), then root index.html (fallback)
    const indexPath = path.join(__dirname, 'dist', 'index.html');
    res.sendFile(indexPath);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
