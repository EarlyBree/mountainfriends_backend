const express = require("express");
const personController = require("./controller/person_controller");
const friendController = require("./controller/friend_controller");
const mountainController = require("./controller/mountain_controller");
const hikeController = require("./controller/hike_controller");

const router = express.Router();

router.get("/getallmountains", mountainController.getAllMountains);

router.post("/getallusers", personController.getAllUser);

router.post("/checkpassword", personController.checkPassword);

router.post("/getuserbyid", personController.getUserInfo);

router.post("/getallmyfriendsid", friendController.getAllMyFriendsId);

router.post("/addafriend", friendController.addAFriend);

router.post("/deleteafriend", friendController.deleteAFriend);

router.post("/getmountainbyid", mountainController.getMountainById);

router.post("/getallhikes", hikeController.getAllHikes);

router.post("/addhike", hikeController.addHike);

router.post("/register", personController.registerPerson);

router.post("/getallhikers", hikeController.getAllHiker);

module.exports = router;
