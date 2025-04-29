const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., CSS, images) from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Hardcoded credentials
const USERNAME = 'admin';
const PASSWORD = '1234';

// Serve login page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Handle login form submission
app.post('/login', (req, res) => {
    const { user, password } = req.body;

    if (user === USERNAME && password === PASSWORD) {
        res.redirect('/views/dashboard.html');
    } else {
        res.send('Invalid credentials!');
    }
});

app.post('/apib/signup', (req, res) => {
    const { user, password, country, comfirm, email } = req.body;

    if (user === USERNAME && password === PASSWORD) {
        res.redirect('/views/dashboard.html');
    } else {
        res.send('Invalid credentials!');
    }
});


// Serve dashboard page
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
