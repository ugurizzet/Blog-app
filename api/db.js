import mysql from 'mysql'; 

export const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'3HtB7aGiGb!',
    database:'blog',
});