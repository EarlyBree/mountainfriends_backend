const Friend = require("../models/friend");
const Person = require("../models/person");

exports.getAllMyFriendsId = (req, res) => {
  Friend.getMyFriendsId(req.body.id).then(([data]) => {
    const allFriendsIds = [];
    for (let i = 0; i < data.length; i++) {
      allFriendsIds.push(data[i].friendsid);
    }
    if (allFriendsIds.length > 0) {
      Person.getMyFriends(allFriendsIds).then(([data]) => {
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
          response.push(newPerson);
        }
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.send(response);
      });
    } else {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.send(data);
    }
  });
};

exports.addAFriend = (req, res) => {
  Friend.addAFriend(req.body.id, req.body.friendsId).then(([data]) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send("okay");
  });
};

exports.deleteAFriend = (req, res) => {
  Friend.deleteAFriend(req.body.id, req.body.friendsId).then(([data]) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send("okay");
  });
};
