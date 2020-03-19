const mysql = require('mysql');

const databaseConnection = mysql.createConnection({
    host: '192.168.100.10',
    user: 'root',
    password: '21282128',
    database: 'dimitar'
});
module.exports = databaseConnection;