const express = require('express'),
      bodyParser = require('body-parser'),
      ejs = require('ejs'),
      sgMail = require('@sendgrid/mail');


// declare la variable app avec express
let app = express();

// fait tourner le moteur ejs
app.set('view engine', 'ejs');

// utilise le dossier public pour les fichiers statiques
app.use(express.static('public'));

// utilise le body-parser
app.use(bodyParser.urlencoded({ extended: false }));


//appel de ma page d'accueil index.ejs
app.get('/', (req, res) => {
    res.render('index');
});


const server = app.listen(process.env.PORT || 8080, (req, res) => {
    console.log('Server online!');
});
