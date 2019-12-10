const mongoose = require('mongoose');
const user = mongoose.model('User');


const usersCreate = function(req, res) 
{
       
    user.create
    ({uname: req.body.uname, email: req.body.email, password: req.body.password,
     }, function(err,newuser)
      {
      console.log(err);
       if(err)
       {
         res.status(500).send("Username already exists");
       } 
       else 
       {
         res.redirect('/'); 
       }
      }
    )
  
};
  
/* const usersReadOne = function (req, res) {res
    .status(200)
    .json({"status" : "success"});
     };




const usersUpdateOne = function (req, res) {res
    .status(200)
    .json({"status" : "success"});
     };
const usersDeleteOne = function (req, res) {res
    .status(200)
    .json({"status" : "success"});
     }; */


 
module.exports = 
{
  usersCreate,
  /* usersReadOne,
  usersUpdateOne,
  usersDeleteOne */
};

//stackoverflow
