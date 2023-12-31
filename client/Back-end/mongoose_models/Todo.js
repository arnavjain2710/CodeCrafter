const mongoose = require('mongoose');
const { Schema } = mongoose;

const TodoSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    problem_tag:{
        type:String,
        required:true,
        unique:true

    },
    problem_name:{
        type: String,
        required: true,
        unique: true
    },
    user_note:{
        type:String,
        default:"No sticky notes were addded by you"

    },
    contestId:{
        type:String,
        required:true

    },
    problem_index:{
        type:String,
        required: true

    },
    problem_date:{
        type: Date,
        default:Date.now
    }
   
  });

  module.exports = mongoose.model('todo',TodoSchema);