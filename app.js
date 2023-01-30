const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const app = express();

const router = require("./router");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(router);

app.listen(8080);
