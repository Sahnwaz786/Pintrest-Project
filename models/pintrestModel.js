const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/pintrest2");
const pintrestSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
    },

posts: [{
  type:mongoose.Schema.Types.ObjectId,
  ref:'Post'
}],
    email:{
        type:String,
        require:true,
        unique:true
    },
    fullname:String
})
pintrestSchema.plugin(plm);
module.exports = mongoose.model("User",pintrestSchema)