const Person = require("../models/person");
const Friend = require("../models/friend");
const Hike = require("../models/hike");

exports.checkPassword = (req, res) => {
  Person.checkPassword(req.body.email).then(([data]) => {
    if (data[0] === undefined) {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.send({ answer: "noUser" });
    } else if (req.body.password === data[0].password) {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.send({ answer: "okay", id: data[0].id });
    } else {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.send({ answer: "wrongPassword" });
    }
  });
};

exports.getUserInfo = (req, res) => {
  Person.getUserById(req.body.id).then(([data]) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const myday = data[0].birthday.getDate();
    data[0].birthday.setDate(myday + 1);
    // console.log(myday);
    res.send({
      id: data[0].id,
      name: data[0].name,
      email: data[0].email,
      birthday: data[0].birthday,
      city: data[0].city,
    });
  });
};

exports.getAllUser = (req, res) => {
  Friend.getMyFriendsId(req.body.id).then(([data]) => {
    const allFriendsIds = [];
    for (let i = 0; i < data.length; i++) {
      allFriendsIds.push(data[i].friendsid);
    }
    Person.getAllUser().then(([data]) => {
      const response = [];
      for (let i = 0; i < data.length; i++) {
        const myday = data[i].birthday.getDate();
        data[i].birthday.setDate(myday + 1);
        let newPerson = {
          id: data[i].id,
          name: data[i].name,
          email: data[i].email,
          birthday: data[i].birthday,
          city: data[i].city,
        };
        if (allFriendsIds.includes(data[i].id) || data[i].id == req.body.id) {
          newPerson.isFriend = 1;
        } else {
          newPerson.isFriend = 0;
        }
        response.push(newPerson);
      }
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.send(response);
    });
  });
};

exports.registerPerson = (req, res) => {
  const newPerson = new Person(
    null,
    req.body.name,
    req.body.email,
    req.body.password,
    req.body.birthday,
    req.body.city
  );
  newPerson.addNewUser().then(([data]) => {
    Person.checkPassword(req.body.email).then(([data1]) => {
      setTimeout(() => {
        console.log(data1[0].id);
        // Friend.createTable(data1[0].id);
        // Hike.createTable(data1[0].id);
      }, 200);
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.send(data);
    });
  });
};
