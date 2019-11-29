const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const shows = require('./shows');

app.use(express.static(path.join(__dirname, '../../build', 'index.html')));

app.get('/', (req, res) => res.send('Hello big  Universe!'));

app.get('/rest/shows', (req, res) => res.send(shows()));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))   
