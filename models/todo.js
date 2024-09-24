
const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({

    id: {
        type: Number
    },
    task: {
        type: String
    },
    complete: {
        type: Boolean
    }

})

const usermodel = mongoose.model("todos", todoSchema)
module.exports = usermodel;
