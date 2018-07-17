


module.exports = function () {
    //recupérantion input sur le formulaire d'inscription
    // let nom = req.body.nom,
    //     prenom = req.body.prenom,
    //     mailRegister = req.body.mail,
    //     pwd = req.body.pwd,
    //     confpwd = req.body.confpwd;
    
    connection.connect(function (err) {
        if (err) {
            return console.error('error: ' + err.message);
        }

        console.log('Connected to the MySQL server.');
    });
};



   
