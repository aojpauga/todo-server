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
server.use(function(req, res, next) {
    console.log(`New request: ${req.method} ${req.path} on ${new Date()}`);
    next();
})
var data = require("./data.js");

//Endpoints
server.get("/todo", function(req, res) {
    var response = {
        msg: "I am here"
    }
    res.json(response);
});


server.listen(port, function() {
    console.log(`Listening on port ${port}`);
});