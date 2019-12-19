const mysql = require('mysql');
const connection = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'morthis1014',
    database: 'hackathon',
    timezone : 'local', 
    'dateStrings':[
        'DATE',"DATETIME"
    ]
});

module.exports = connection;