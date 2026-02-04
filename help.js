var mysql = require ('mysql');
var connect = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"form_db"
})
module.exports=connect