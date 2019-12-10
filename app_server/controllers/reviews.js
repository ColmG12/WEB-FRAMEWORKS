/* GET Emeli Sande "Next To Me" review page */
const emelisandeNextToMe = function(req, res)
{ 
res.render
('reviews-emelisande-nexttome', 
    { 
        title: 'Rate or Slate' 
    }
); 
};

/* GET Add review page */
const addReview = function(req, res)
{ 
res.render
('reviews-addreview-form', 
    { 
        title: 'Rate or Slate' 
    }
); 
};

module.exports = 
{
emelisandeNextToMe,	
addReview 
};
