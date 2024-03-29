const mongoose = require('mongoose');


const userSchema = new mongoose.Schema
(
  {
    uname: 
    {
      type: String,
      required: true
    },email:
    {
      type: String,
      required: true
    },
    password: 
    {
      type: String,
      required: true
    },
    confirmPassword: 
    {
      type: String,
      required: true
    } 
  },
  { 
    collection : 'users'
  }
);