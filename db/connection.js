const mysql = require('mysql2');

const connection = mysql.createConnection(
{
host: 'localhost',
// MySQL username
user: 'root',
password: 'Eddiebuck88',
database: 'employees',
},
console.log('connected to the employees_db database')
    
);
module.exports = connection
