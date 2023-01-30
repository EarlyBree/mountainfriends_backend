const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "mountain_friends",
  password: "Nomeat81",
});

module.exports = pool.promise();
