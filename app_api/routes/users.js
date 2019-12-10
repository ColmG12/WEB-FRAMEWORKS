const express = require('express');
const router = express.Router();
const ctrlUser = require('../controllers/users');
//const ctrlReview = require('../controllers/reviews');

//User details
router
  .route('/login/register')
  .post(ctrlUser.usersCreate);

//Review details
//router
//  .route('/reviews/2012/emelisande-nexttome')
//  .get(ctrlReview.reviewEmeliSandeNextToMe)
  

module.exports = router;
