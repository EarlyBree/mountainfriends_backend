const db = require("../database");

module.exports = class Person {
  constructor(id, name, email, password, birthday, city) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.birthday = birthday;
    this.city = city;
  }

  static checkPassword(email) {
    return db.execute("select id, email, password from person where email=?", [
      email,
    ]);
  }

  static getUserById(id) {
    return db.execute("select * from person where id=?", [id]);
  }

  static getAllUser() {
    return db.execute("select * from person");
  }

  static getMyFriends(myFriends) {
    let query = "select * from person where id in (" + myFriends.join() + ")";
    return db.execute(query);
  }

  addNewUser() {
    return db.execute(
      "insert into person (name, email, password, birthday, city) values (?, ?, ?, ?, ?)",
      [this.name, this.email, this.password, this.birthday, this.city]
    );
  }
};
