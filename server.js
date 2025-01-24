const express = require('express');
const path = require('path');
const app = express();
const eventsData = require('./public/assets/events.json'); // Relative path to the JSON file



app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/ejs', (req, res) => {
  res.render('index'); 
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/events', (req, res) => {
    res.render('events', { events: eventsData });
});

const PORT = 5500;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
