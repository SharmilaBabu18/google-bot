const express = require('express');
const bodyParser = require('body-parser');
const startBot = require('./bot');

const app = express();
app.use(bodyParser.json());

app.post('/start-bot', async (req, res) => {
    const { meetLink, email, password } = req.body;
    try {
        await startBot(meetLink, email, password);
        res.json({ message: 'Bot started successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to start bot', error });
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});