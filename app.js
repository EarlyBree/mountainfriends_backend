const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const app = express();

const router = require("./router");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(router);

const port = process.env.PORT || 3000;

app.listen(port);

app.listen(8080);
