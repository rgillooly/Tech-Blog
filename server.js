const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.set('view engine','handlebars');

// main route with blogposts
app.get('/', (req, res) => {
    res.render('/views/index.handlebars')
})

// route for login
app.get('/login', (req, res) => {
    res.render('/views/login.handlebars')
})
// route for adding account
app.post('/login/newaccount', (req, res) => {
    res.render('/views/newaccount.handlebars')
})
// route for posting comments
app.post('/comment')
// route for new posts