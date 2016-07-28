exports.render = function(req, res) {
  res.render('index', {
    title: 'Mean Stack Reference',
    user: JSON.stringify(req.user)
  });
};