exports.render = function(req, res) {
  res.render('index', {
    title: 'NPM',
    fullName: req.user ? req.user.fullName : '',  //For EJS use
    user: JSON.stringify(req.user)                //For AngularJS Authentication
  });
};