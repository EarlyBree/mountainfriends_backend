const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "mountainfriends.cf4y4hx0ptxw.eu-central-1.rds.amazonaws.com",
  user: "admin",
  database: "mountain_friends",
  password: "SomePublicPassword",
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

// const sqlite3 = require("sqlite3").verbose();

// // Connect to the database
// const db = new sqlite3.Database("database.db", (err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log("Connected to the mydatabase.db database.");
// });

// module.exports = db;

// const sqlite3 = require("sqlite3").verbose();

// const db = new sqlite3.Database("database.db", (err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log("Connected to the database.db database.");
// });

// const dbPromise = (query) => {
//   return new Promise((resolve, reject) => {
//     db.all(query, (err, rows) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(rows);
//       }
//     });
//   });
// };

// module.exports = dbPromise;
