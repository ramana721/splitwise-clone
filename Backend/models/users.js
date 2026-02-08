const { model, Mongoose, default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type:String,
    required: true
  },
  lastname: {
    type:String,
    required: false
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:false
  },
  image:{
    type:String,
    required:false
  },
  remember:{
    type:Boolean,
    required:false
  },
  

},{
    timestamps: true,
    versionKey: false
   });

const User = mongoose.model('User',userSchema);
module.exports = User;