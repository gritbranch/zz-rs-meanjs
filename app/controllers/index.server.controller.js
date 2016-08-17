exports.render = function(req, res) {
  res.render('index', {
    title: 'Nerds Produce Money',
    fullName: req.user ? req.user.fullName : '',
    user: JSON.stringify(req.user)                //For AngularJS Authentication
  });
};