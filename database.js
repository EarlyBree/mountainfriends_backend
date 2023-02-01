// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "mysql80e.ssl-net.net",
//   user: "h39u103",
//   database: "h39u103_breebank",
//   password: "Nomeat81",
// });

// module.exports = pool.promise();

// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "mountain_friends",
//   password: "Nomeat81",
// });

// module.exports = pool.promise();

const sqlite3 = require("sqlite3").verbose();

// Connect to the database
const db = new sqlite3.Database("database.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the mydatabase.db database.");
});

module.exports = db;
