const mongoose = require('mongoose');
const review = mongoose.model('Review');


const reviewEmeliSandeNextToMe = function(req, res) 
{
       
    review.create
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

module.exports = 
{
    reviewEmeliSandeNextToMe,
    /* usersReadOne,
    usersUpdateOne,
    usersDeleteOne */
};