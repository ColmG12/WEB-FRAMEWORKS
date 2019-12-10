const mongoose = require('mongoose');


const userSchema = new mongoose.Schema
(
  {
    uname: 
    {
      type: String,
      required: true
    },
    email:
    {
      type: String,
      required: true
    },
    password: 
    {
      type: String,
      required: true
    } 
  },
    { 
      collection : 'users' 
    }
);

mongoose.model('User', userSchema);

//Reference Stack Overflow
//https://stackoverflow.com/questions/53915510/req-body-username-and-req-body-password-are-undefined