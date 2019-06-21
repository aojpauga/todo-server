var express = require("express");
var cors = require("cors");

var server = express();
var port = 8080;

//MiddleWare
server.use(express.urlencoded({
    extended: false
}));
server.use(express.json());
server.use(cors());
var data = require("./data.js");

server.listen(port, function() {
    console.log(`Listening on port ${port}`);
});