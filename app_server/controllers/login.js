/* GET home page */
const homelogin = function(req, res)
{ 
res.render
('LogIn', 
	{ 
	title: 'Rate or Slate', 
	pageHeader: 
	{
	title: 'Rate or Slate',
	strapline: 'Music reviews; for the people, by the people',
	strap1: 'Log In',
	strap2: 'Register'
	} 
	}
); 
};

/* GET Register page */
const registerInfo = function(req, res)
{ 
res.render
('Register', 
	{ 
		title: 'Rate or Slate',
		pageHeader: 
	{
		title: 'Rate or Slate',
		strapline: 'Music reviews; for the people, by the people',
		strap3: 'Create an Account'
	} 
	}
); 
};

module.exports = 
{
homelogin,	
registerInfo 
};
