const db = require("../database");

module.exports = class Hike {
  constructor(id, mountain, date) {
    this.id = id;
    this.mountain = mountain;
    this.date = date;
  }

  static getAllMyHikes(id) {
    const myTable = "hike" + id;
    const sqlQuery = "select * from " + myTable;
    return db.execute("select * from hikes where person=?", [id]);
  }

  static getAllMyHikesNew(id) {
    return db.execute("select * from hikes where person=?", [id]);
  }

  static addHikeNew(id, mountain, date) {
    return db.execute(
      "insert into hikes (person, mountain, date) values (?, ? ,?)",
      [id, mountain, date]
    );
  }

  static addHike(id, mountain, date) {
    const myTable = "hike" + id;
    const sqlQuery =
      "insert into " +
      myTable +
      " (mountain, date) values (" +
      mountain +
      ", '" +
      date +
      "')";
    return db.execute(sqlQuery);
  }

  static createTable(id) {
    const myTable = "hike" + id;
    const sqlQuery =
      "create table " +
      myTable +
      "(id int NOT NULL AUTO_INCREMENT, mountain int, date DATE, PRIMARY KEY(id))";
    db.execute(sqlQuery);
  }

  static wasOnTheMountain(mountainId, personId) {
    const myTable = "hike" + personId;
    return db.execute("select * from hikes where mountain = ?", [mountainId]);
  }
};
