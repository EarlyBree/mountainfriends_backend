const Mountain = require("../models/mountain");

exports.getAllMountains = (req, res) => {
  Mountain.getAllMountains().then(([data]) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(data);
  });
};

exports.getMountainById = (req, res) => {
  Mountain.getMountainById(req.body.id).then(([data]) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(data);
  });
};
