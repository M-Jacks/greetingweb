const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    const currentTime = new Date().toLocaleTimeString();
    res.render('index', { currentTime });
});

app.post('/greet', (req, res) => {
    const currentTime = new Date();
    const hour = currentTime.getHours();

    let greeting; 
    if (hour < 12) { 
        greeting = 'Good morning!'; 
    } else if (hour < 18) {
        greeting = 'Good afternoon!';
    } else { 
        greeting = 'Good evening!';
    }

    res.json({ greeting });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
