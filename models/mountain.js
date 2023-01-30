const db = require("../database");

module.exports = class Mountain {
  constructor(id, name, altitude, difference, longitude, duration) {
    this.id = id;
    this.name = name;
    this.altitude = altitude;
    this.difference = difference;
    this.longitude = longitude;
    this.duration = duration;
  }

  static getAllMountains() {
    return db.execute("select * from mountain");
  }

  static getMountainById(id) {
    return db.execute("select * from mountain where id = ?", [id]);
  }
};
