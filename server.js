const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/greet', (req, res) => {
    const currentHour = new Date().getHours();
    let message = '';

    if (currentHour < 12) {
        message = 'Good Morning!';
    } else if (currentHour < 18) {
        message = 'Good Afternoon!';
    } else {
        message = 'Good Evening!';
    }

    res.json({ message });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
