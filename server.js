const express = require('express'),
      bodyParser = require('body-parser'),
      session = require('express-session'),
      ejs = require('ejs'),
	  apikey = require('./sendgrid/apikey'),
	  mysql = require('mysql'),
	  bcrypt = require('bcrypt'),
      sgMail = require('@sendgrid/mail'),
      connection = require('./public/js/connection'),
      jwt = require('jsonwebtoken'),
      config = require('./public/js/config');
	  saltRounds = 10;
	  moment = require('moment');
sgMail.setApiKey(apikey);

// declare la variable app avec express
let app = express();

// fait tourner le moteur ejs
app.set('view engine', 'ejs');


//set secret key to sign cookies
app.set("superSecret", config.secret);

// USE COOKIE PARSER with secret
app.use(session({secret : app.get('superSecret')}));
// initiate a session variable to pass value and be accessible everywhere
let sess;

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
			
		// cryptage et generation du sel
		bcrypt.hash(user.password, saltRounds, (err, hash)=>{
			if (err){
				console.log("Erreur dans le hashage :: " + err);			
			}else{				
				user.password = hash;
				console.log("hashed key :: " + user.password);
				// envoi du nouvel utilisateur
				connection.query(`INSERT INTO users SET ?`, user);
			}
		})
		

		// connection.end();

		// const registrationmsg = {
		// to: user.mail,
		// from: "coworkingmda@gmail.com",
		// subject: "Bonjour " + user.surname + " " + user.name,
		// text: "Bienvenue, vous êtes bien inscrit sur le site de Coworking de la Maison de l'Avenir de Saint-Gaudens. <br> Cliquez ici pour retourner sur le site : " + "url à mettre",
		// html: "Bienvenue, vous êtes bien inscrit sur le site de Coworking de la Maison de l'Avenir de Saint-Gaudens. <br> Cliquez ici pour retourner sur le site : " + "url à mettre",
		// };
		// sgMail.send(registrationmsg);
		res.render('index');
	} 
	else {
		res.send('mot de passe invalide');
	}

});



// when validating log_in form
app.post('/log_in', (req,res)=>{
	// get input into a "user" object
	let user = {
		mail : req.body.mailRegister,
        password : req.body.pwd
	}
	// get the user on the database whith the mail of the user trying to log in 
	connection.query(`SELECT * FROM Users WHERE mail = ?`, user.mail, (err, result)=>{
		if(err){
			console.error(err);
		}
		// if something match the query
		else if(result[0] != undefined){
			// compare both mails
			if(result[0].mail == user.mail){
				bcrypt.compare(user.password, result[0].password, function(err, cryptres){
					if(err){console.error(err);}
					else {
						if (cryptres == true){
							let authUser = {
			 				name : result[0].name,
			 				surname : result[0].surname,
			 				mail : result[0].mail,
			 				phone : result[0].phone,
			 				avatar : result[0].urlavatar,
			 				role : result[0].role
			 				}
			 				// set session then push the authUser object in it : it will be accessed with "sess.user"
			 				sess = req.session;
			 				sess.user = authUser;

				 			// if it's a classic user, redirect to the user dashboard
				 			if(sess.user.role === "user"){
				 				res.redirect("/dashboard");
				 			}
				 			// else if it's an admin, redirect to admin dashboard
				 			else if(sess.user.role === "admin"){
				 				res.redirect("/dashboardadmin");
				 			}
						}
						else {
							res.redirect("/");
						}
					}
				});
			}
		}
		// if the query don't meet any match so the identification failed
		else {
			// user failed to authenticate
			res.redirect("/");
		}
	});
});

app.post("/booking", (req, res) => {
	let user = {
	name : req.body.name,
	surname : req.body.surname,
	tel : req.body.telephone,
	mail : req.body.mail
	}
	let chosendate = req.body.date;
	let amonthlater = moment(chosendate).add(1, 'month').format("YYYY-MM-DD");
	console.log(amonthlater);
	let option = {
		price : req.body.price,
		start_date : chosendate,
		end_date : amonthlater,
		numberOfHalfDays : req.body.nbrDay
	}

	let place = {
	 name :	req.body.place
	}
	console.log(place);

	if(req.body.am && req.body.pm){
		let morning = req.body.am;
		let afternoon = req.body.pm;
	}

	else{
	let momentOfDay =  req.body.am || req.body.pm
		console.log(momentOfDay);
	}
	// console.log(user);
	// console.log(option);
	// let rent_place = {
	// 	day : chosendate
	// 	// idPlace = 
	// }
	// // console.log(rent_place);

});



// route to user dashboard page
app.get('/dashboard', (req, res)=>{
	sess=req.session;
	// console.log(sess.user);
	res.render('dashboard');
});

// route to dashboardadmin
//-----------------------------------

	// Request MySQL
	//--------------------------------

	let query = `SELECT * FROM Users`;
	var rqname=[];
	connection.query(query, (err, result)=>{
		if(err){
			console.error(err);
		}else{
			for (let i = 0; i < result.length; i++) {
				rqname.push(result[i].name)
				// console.log(rqname);
			}

		}
	});

app.get('/dashboardadmin', (req, res)=>{
	sess=req.session;
	console.log(sess);
	if(sess.role != "admin") {
		console.log("not an admin!!")
		res.redirect("/");
	}
	else {
	res.render('dashboardadmin', {'rqname' : 'rqname',
								'ole':rqname});
	}
});




//---------------------------------------------

const server = app.listen(process.env.PORT || 8080, (req, res) => {
    console.log('Server online!');
});
