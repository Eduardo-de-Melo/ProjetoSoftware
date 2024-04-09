const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('login');
});

app.get('/horarios', function(req, res) {
    res.render('horarios');
});

app.get('/configuracoes', (req, res) => {
    res.render('configuracoes');
});

app.get('/cabeleireiros', (req, res) => {
    res.render('cabeleireiros');
});

app.get('/informacoes', function(req, res) {
    res.render('informacoes');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});