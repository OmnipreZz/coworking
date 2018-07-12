const express = require('express'),
      bodyParser = require('body-parser'),
      ejs = require('ejs');


// declare la variable app avec express
let app = express();

// fait tourner le moteur ejs
app.set('view engine', 'ejs');

// utilise le dossier public pour les fichiers css, script.js
app.use(express.static('public'));

// utilise le body-parser
app.use(bodyParser.urlencoded({ extended: false }));


// Lancement serveur sur le port 8080
app.listen(process.env.PORT || 8080);
// verifie dans la console si le serveur est lancé
console.log("Serveur online");



//appel de ma page d'accueil index.ejs
app.get('/', (req, res) => {
    res.render('index');
});

