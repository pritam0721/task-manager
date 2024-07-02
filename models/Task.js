const mongoose = require('mongoose')


const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
         required:[true,'name is require'],
         trim: true,
         maxlength:[20,"name must be in 20 words or few "],
        
        }, 
    completed:{ 
        type : Boolean, 
        default:false,
    }
})

module.exports = mongoose.model('Task',TaskSchema)