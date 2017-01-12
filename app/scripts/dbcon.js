var hdb    = require('hdb');
var client = hdb.createClient({
  host           : 'stii850366trial', // system database host
  port           : '30055',
  databaseName   : 'STI',      // name of a particular tenant database
  user           : 'SYSTEM',     // user for the tenant database
  password       : '360876Kh'    // password for the user specified
});
client.on('error', function (err) {
  console.error('Network connection error', err);
});
client.connect(function (err) {
  if (err) {
    return console.error('Connect error', err);
  }
  client.exec('select * from DUMMY', function (err, rows) {
    client.end();
    if (err) {
      return console.error('Execute error:', err);
    }
    console.log('Results:', rows);
  });
});