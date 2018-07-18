const express = require('express'),
      bodyParser = require('body-parser'),
      ejs = require('ejs'),
	  apikey = require('./sendgrid/apikey'),
	  mysql = require('mysql'),
	  bcrypt = require('bcrypt'),
      sgMail = require('@sendgrid/mail');
      connection = require('./public/js/connection')
sgMail.setApiKey(apikey);

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
	//recupérantion input sur le formulaire d'inscription et création d'un nouveau user
    let user = {
    	name : req.body.nom,
        surname : req.body.prenom,
		mail : req.body.mailRegister,
        password : req.body.pwd,
	}
	// création d'une variable avec la valeur du champs de confirmation du password
	let confpwd = req.body.confpwd
	// console.log(user.password);
	// console.log(confpwd);
	//requête pour récupérer le mail du nouveau user s'il existe déjà dans la DB
	let queryMail = `SELECT mail FROM users WHERE mail = '${user.mail}'`;
	// comparaison mdp/confirmation mdp && mail du nouveau user/mail dans DB
	if (user.password == confpwd && queryMail != user.mail) {
		// envoi du nouvel utilisateur
		connection.query(`INSERT INTO users SET ?`, user);
		connection.end();
		const registrationmsg = {
		to: user.mail,
		from: "coworkingmda@gmail.com",
		subject: "Bonjour " + user.surname + " " + user.name,
		text: "Bienvenue, vous êtes bien inscrit sur le site de Coworking de la Maison de l'Avenir de Saint-Gaudens. <br> Cliquez ici pour retourner sur le site : " + "url à mettre",
		html: "Bienvenue, vous êtes bien inscrit sur le site de Coworking de la Maison de l'Avenir de Saint-Gaudens. <br> Cliquez ici pour retourner sur le site : " + "url à mettre",
		};
		sgMail.send(registrationmsg);
		res.render('index');
	} 
	else {
		res.send('mot de passe invalide');
	}

});
//---------------------------------------------


const server = app.listen(process.env.PORT || 8080, (req, res) => {
    console.log('Server online!');
});
