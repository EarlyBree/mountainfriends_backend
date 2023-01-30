const db = require("../database");

module.exports = class Friend {
  constructor(id, friendid) {
    this.id = id;
    this.friendid = friendid;
  }

  static getMyFriendsId(myId) {
    const mySqlTable = "myfriends" + myId;
    const sqlQuery = "select * from " + mySqlTable;
    return db.execute("select * from friends where person=?", [myId]);
  }

  static addAFriend(myId, friendId) {
    const mySqlTable = "myfriends" + myId;
    const sqlQuery =
      "insert into " + mySqlTable + " (friendsid) values (" + friendId + ")";
    return db.execute("insert into friends (person, friendsid) values (?, ?)", [
      myId,
      friendId,
    ]);
  }

  static deleteAFriend(myId, friendId) {
    const mySqlTable = "myfriends" + myId;
    const sqlQuery =
      "delete from " + mySqlTable + " where friendsid=" + friendId;
    return db.execute(
      "delete from friends where person = ? and friendsid = ?",
      [myId, friendId]
    );
  }

  static createTable(id) {
    const myTable = "myfriends" + id;
    const sqlQuery =
      "create table " +
      myTable +
      "(id int NOT NULL AUTO_INCREMENT, friendsid int, PRIMARY KEY (id))";
    return db.execute(sqlQuery);
  }
};
