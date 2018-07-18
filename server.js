const express = require('express'),
      bodyParser = require('body-parser'),
      ejs = require('ejs'),
	  apikey = require('./sendgrid/apikey'),
	  mysql = require('mysql'),
	  bcrypt = require('bcrypt'),
      sgMail = require('@sendgrid/mail'),
      connection = require('./public/js/connection'),
      jwt = require('jsonwebtoken'),
      config = require('./config');

sgMail.setApiKey(apikey);

// declare la variable app avec express
let app = express();

// fait tourner le moteur ejs
app.set('view engine', 'ejs');

//set secret key to read token
app.set("superSecret", config.secret);

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
        role : "user",
	}
	// création d'une variable avec la valeur du champs de confirmation du password
	let confpwd = req.body.confpwd
	//requête pour récupérer le mail du nouveau user s'il existe déjà dans la DB
	let queryMail = `SELECT mail FROM users WHERE mail = '${user.mail}'`;
	// comparaison mdp/confirmation mdp && mail du nouveau user/mail dans DB
	if (user.password == confpwd && queryMail != user.mail) {
		// envoi du nouvel utilisateur
		connection.query(`INSERT INTO users SET ?`, user);
		const registrationmsg = {
		to: user.mail,
		from: "coworkingmda@gmail.com",
		subject: "Bonjour " + user.surname + " " + user.name,
		text: "Bienvenue, vous êtes bien inscrit sur le site de Coworking de la Maison de l'Avenir de Saint-Gaudens. <br> Cliquez ici pour retourner sur le site : " + "url à mettre",
		html: "Bienvenue, vous êtes bien inscrit sur le site de Coworking de la Maison de l'Avenir de Saint-Gaudens. <br> Cliquez ici pour retourner sur le site : " + "url à mettre",
		};
		sgMail.send(registrationmsg);
		// connection.end();
		res.render('index');
	} 
	else {
		res.send('mot de passe invalide');
	}

});



// when validating log_in form
app.post('/dashboard', (req,res)=>{
	// get input into a "user" object
	let user = {
		mail : req.body.mailRegister,
        password : req.body.pwd
	}
	// get the user on the database whith the mail of the user trying to log in 
	let authquery = `SELECT * FROM Users WHERE mail ='${user.mail}'`
	connection.query(authquery, (err, result)=>{
		if(err){
			console.error(err);
		}
		// if something match the query
		else if(result[0] != undefined){
			// compare also the password of the user with the matching mail
			if(result[0].mail == user.mail && result[0].password == user.password){	
				
				// that's what will be in the token
				const payload = {
					name: result[0].name,
					mail: result[0].mail,
					role: result[0].role
				};
				// create the token with payload and secret key (cf config.js file)
				let token = jwt.sign(payload, app.get("superSecret"), {expiresIn: 1200000});
				// console.log(token);
			 	res.redirect("/dashboard");
			}
		}
		// if the query meets no match
		else {
			// connection.end();
			res.redirect("/");
		}
	});
});




// defines an instance of the router for routes that imply authentication
let tokenRoutes = express.Router();
// route middleware to verify tokens
tokenRoutes.use((req, res, next)=>{
	// look for token in url or body of request
	let token = req.body.token || req.query.token;
	// if a token is found
	if (token){
		console.log(token);
		console.log("checking the token")
		// check token
		jwt.verify(token, app.get("superSecret"), (err, decoded)=>{
			if(err){
				console.error(err);
			}
			// if token is as expected, save it for further requests in other routes
			else {
				req.decoded = recoded;
				next();
			}
		});
	}
	// if there is no token found return an error
	else {
	res.status(403);
	res.send("no token found");
	}
});


// apply tokenverification to following routes
// app.use(tokenRoutes);


// page resa
app.get('/resa', (req,res)=>{
	console.log(req.body.token);
	console.log(req.query.token);
	console.log(req.param.token);
    res.render('resa');
});

// route to dashboard page
app.get('/dashboard', (req, res)=>{
	console.log(req.body.token);
	console.log(req.query.token);
	console.log(req.param.token);
	console.log(req.headers['x-access-token']);	
	console.log(req.session);
	console.log(req.session.token);
	res.render('dashboard');
});



//---------------------------------------------

const server = app.listen(process.env.PORT || 8080, (req, res) => {
    console.log('Server online!');
});
