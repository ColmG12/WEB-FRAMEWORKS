const express = require('express');
const router = express.Router();

const ctrlLogin = require('../controllers/login'); 
//const ctrlReviews = require('../controllers/reviews'); 

/* Login pages */
router.get('/', ctrlLogin.homelogin);
router.get('/login/register', ctrlLogin.registerInfo);

router.get('/about', function(req, res, next) {
    res.render('about');
  });

  router.get('/addreview', function(req, res, next) {
    res.render('addreview');
  });
/* Review pages */
//router.get('/reviews/2012/emelisande-nexttome', ctrlReviews.emelisandeNextToMe);
//router.get('/reviews/addreview/new', ctrlReviews.addReview);

module.exports = router;







