const express = require('express'),
      bodyParser = require('body-parser'),
      ejs = require('ejs'),
	  apikey = require('./sendgrid/apikey'),
	  mysql = require('mysql'),
      sgMail = require('@sendgrid/mail');
sgMail.setApiKey(apikey);

// declare la variable app avec express
let app = express();

//hostDB.js
let config = require('./public/js/hostDB.js');
let connection = mysql.createConnection(config);


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

// route pour l'envoie du formulaire de contact
app.post('/', (req, res) => {
	// récupération des input dans le formulaire de contact
	let user = req.body.user
	let tel = req.body.tel
	let mail = req.body.mail
	let message = req.body.message;
	// création d'un mail avec les informations du formulaire
	const msg = {
		to: "coworkingmda@gmail.com",
		from: mail,
		subject: user + " a rempli le formulaire de contact coworking",
		text: user + " a rempli le formulaire de contact du site de coworking.<br> Il est joignable au " + tel + " ou à l'adresse : " + mail + ".<br>" + "Il souhaite vous faire parvenir ce message" + message,
		html: user + " a rempli le formulaire de contact du site de coworking.<br> Il est joignable au " + tel + " ou à l'adresse : " + mail + ".<br>" + "Il souhaite vous faire parvenir ce message : " + message,
	};
	// envoi du mail à l'adresse de la constante msg
	sgMail.send(msg);
	res.render('index');
});

// page resa
app.get('/resa', (req,res)=>{
    res.render('resa');
});

// page test
app.get('/test', (req,res)=>{
    res.render('testpage');
});

// requête DB inscription ---------------------
app.post('/registration', (req, res) => {
	//recupérantion input sur le formulaire d'inscription
    let nom = req.body.nom,
        prenom = req.body.prenom,
		mailRegister = req.body.mailRegister,
        pwd = req.body.pwd,
		confpwd = req.body.confpwd; 
	//requête
	let queryRegister = `INSERT INTO users (name, surname, mail, password) VALUES ('${nom}', '${prenom}', '${mailRegister}', '${pwd}')`;

	if (pwd === confpwd) {
		connection.query(queryRegister);
		connection.end();
		res.render('index');
	} 
	else {
		res.send('mot de passe invalide');
	}

});


const server = app.listen(process.env.PORT || 8080, (req, res) => {
    console.log('Server online!');
});
