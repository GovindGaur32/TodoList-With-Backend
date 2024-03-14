const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    task:String,
    done:{
        type:Boolean,
        default:false
    }
},{timestamps:true}
)

const TodoModel = mongoose.model('task',TodoSchema)

module.exports = TodoModel;