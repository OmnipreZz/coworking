const mysql = require('mysql');

let connection = mysql.createConnection({
        host: 'den1.mysql3.gear.host',
        user: 'coworkingmda1',
        password: 'Op2U~E6!Ih23',
        database: 'coworkingmda1'
    });
    console.log("db connecté");



    module.exports = connection;





