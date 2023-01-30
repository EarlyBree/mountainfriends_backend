const Hike = require("../models/hike");
const Mountain = require("../models/mountain");
const Person = require("../models/person");

exports.getAllHikes = (req, res) => {
  Hike.getAllMyHikes(req.body.id).then(([data]) => {
    data.map((item) =>
      Mountain.getMountainById(item.mountain).then(([hike]) => {
        item.mountain = hike[0];
        const myday = item.date.getDate();
        item.date.setDate(myday + 1);
        // console.log(item.date);
      })
    );
    setTimeout(() => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      console.log(data);
      res.send(data);
    }, 100);
  });
};

exports.addHike = (req, res) => {
  Hike.addHikeNew(req.body.id, req.body.mountain, req.body.date).then(
    ([data]) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.send(data);
    }
  );
};

exports.getAllHikers = (req, res) => {
  Person.getAllUser().then(([data]) => {
    const allPersonsOnTheMountain = [];

    setTimeout(() => {
      data.map((item) =>
        Hike.wasOnTheMountain(req.body.mountain, item.id).then(([data1]) => {
          if (data1.length > 0) {
            allPersonsOnTheMountain.push(item.name);
          }
        })
      );
    }, 100);
    setTimeout(() => {
      res.setHeader("Access-Control-Allow-Origin", "*");

      res.send(allPersonsOnTheMountain);
    }, 300);
  });
};

exports.getAllHiker = (req, res) => {
  Hike.wasOnTheMountain(req.body.mountain).then(([data]) => {
    const allPersonsOnTheMountain = [];
    // console.log(data);
    setTimeout(() => {
      data.map((item) =>
        Person.getUserById(item.person).then(([data1]) => {
          data1.map((item1) => {
            if (!allPersonsOnTheMountain.includes(item1.name)) {
              allPersonsOnTheMountain.push(item1.name);
              // console.log(allPersonsOnTheMountain);
            }
          });
        })
      );
    }, 100);
    setTimeout(() => {
      res.setHeader("Access-Control-Allow-Origin", "*");

      res.send(allPersonsOnTheMountain);
    }, 300);
  });
};
