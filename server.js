var express = require("express");
var cors = require("cors");
//var uuid = require("uuid");


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
server.get("/todos", function(req, res) {
    var response = {
        todos: data.todos
    }
    res.json(response);
});

server.post("/todos", function(req, res) {
    if (!req.body.name || !req.body.completed || !req.body.editing) {
        res.status(400);
        var response = {
            msg: "Enter valid credentials"
        }
    } else {
        var newtodo = {
            name: req.body.name,
            completed: req.body.completed,
            editing: req.body.editing,
            created_on: new Date()
        };
        data.todos = newTodo;
        res.status(201);
        res.send();
    }
});

server.listen(port, function() {
    console.log(`Listening on port ${port}`);
});