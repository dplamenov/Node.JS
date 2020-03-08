const mysql = require('mysql');

const databaseConnection = mysql.createConnection({
    host: '192.168.100.10',
    user: 'dimitar',
    password: '21282128',
    database: 'dimitar'
});

databaseConnection.connect();
module.exports = databaseConnection;