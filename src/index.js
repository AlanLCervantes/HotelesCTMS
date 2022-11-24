let mysql      = require('mysql');
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'hotelesCTMS' 
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
}); 
let consulta = {}
connection.query('SELECT * FROM PAGO;', function (error, results, fields) {
    if (error) throw error;
    consulta = results[0];
    console.log(consulta["costo"]);
});
 
connection.end();