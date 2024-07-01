const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const PORT = 3000;

// Database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "@Deekshith1",
    database: "project",
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database.');
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route to handle insert question
app.post('/askquestion', (req, res) => {
    const question = req.body.question;

    if (!question) {
        return res.status(400).send({ error: true, message: 'Please provide a question' });
    }

    const sql = 'INSERT INTO questions (question) VALUES (?)';
    db.query(sql, [question], (err, result) => {
        if (err) {
            console.error('Database insertion failed:', err);
            return res.status(500).send({ error: true, message: 'Database insertion failed' });
        }
        res.send({ error: false, data: result, message: 'Question added successfully' });
    });
});

// Default route
app.use('/', (req, res) => {
    console.log("working");
    res.send("Server is working");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
