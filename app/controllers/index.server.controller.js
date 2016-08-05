exports.render = function(req, res) {
  res.render('index', {
    title: 'MEAN Stack',
    user: JSON.stringify(req.user)
  });
};