var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'test'
});

connection.connect();

/*connection.query('SELECT * FROM NAME', function(err, rows, fields) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  for (var i = 0; i < rows.length; i++) {
    console.log(rows[i].NAME);
  };
});*/

connection.query('SELECT * FROM ACTIVITY', function(err, rows, fields) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  json = JSON.stringify(rows);
  console.log(json);

});



connection.end();