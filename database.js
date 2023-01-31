const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "mysql80e.ssl-net.net",
  user: "h39u103",
  database: "h39u103_breebank",
  password: "Nomeat81",
});

module.exports = pool.promise();

// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "mountain_friends",
//   password: "Nomeat81",
// });

// module.exports = pool.promise();
