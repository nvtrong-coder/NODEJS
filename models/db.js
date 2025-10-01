const mysql = require('mysql2');

// Kết nối MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'ten_user',
  password: process.env.DB_PASS || 'mat_khau',
  database: process.env.DB_NAME || 'ten_database'
});

module.exports = pool.promise();
