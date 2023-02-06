const mysql = require('mysql2');
// require('dotenv').config();

// Connect to database
// const connection = mysql.createConnection(

//       process.env.DB_NAME,
//       process.env.DB_USER,
//       process.env.DB_PASSWORD,
//     {
//       host: "localhost",
//       dialect: "mysql",
//       port: 3306,
//     }
//   );
//   connection.connect(function (err){
//     if(err) {
//         throw err
//     }
//   })

const connection = mysql.createConnection(
{
host: 'localhost',
// MySQL username
user: 'root',
password: 'Eddiebuck88',
database: 'employees_db',
},
console.log('connected to the employees_db database')
    
);
module.exports = connection
