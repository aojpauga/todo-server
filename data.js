const uuid = require("uuid");

var data = {
    todos: [{
            id: uuid.v4(),
            name: "Mow lawn",
            completed: false,
            editing: false,
            created_on: new Date()
        },
        {
            id: uuid.v4(),
            name: "Mow lawn",
            completed: false,
            editing: false,
            created_on: new Date()
        },
        {
            id: uuid.v4(),
            name: "Mow lawn",
            completed: false,
            editing: false,
            created_on: new Date()
        },
        {
            id: uuid.v4(),
            name: "Mow lawn",
            completed: false,
            editing: false,
            created_on: new Date()
        },

    ]

};

module.exports = data;