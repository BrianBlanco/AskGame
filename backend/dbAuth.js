const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '185.162.171.27',
    user: 'gupoecom_brian',
    password: '-Nr{t5b]W0Ft',
    database: 'gupoecom_askgame',
});

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.');
        }
    }

    if (connection) connection.release()
    return


   
})

module.exports = pool;

/*
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'gupoe.com',
    user: 'gupoecom_brian',
    password: '-Nr{t5b]W0Ft',
    database: 'gupoecom_mobistudent'
});

module.exports = connection;
*/