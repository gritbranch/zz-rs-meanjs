//mongodb://localhost/mean-book
//mongodb://ryansalvador:xxxPA50@ds147975.mlab.com:47975/ryansalvador-dev
//mongodb://ryansalvador:xxxPA50@ds139985.mlab.com:39985/ryansalvador-prod

module.exports = {
  db: 'mongodb://ryansalvador:xxxPA50@ds139985.mlab.com:39985/ryansalvador-prod',
  sessionSecret: 'productionSessionSecret',
  facebook: {
    clientID: '1061065367261191',
    clientSecret: '27831c304b199565a67a38659dae4958',
    callbackURL: 'https://ryansalvador.herokuapp.com/facebook/callback'
  },  
  twitter: {
    clientID: '57k6XmQsmXIN4BcXgv5qOmX5Y',
    clientSecret: 'UDMZywySzHDs9FcAJE73zut1PqS47rfI5u2km3oDQxFNsPxNAk',
    callbackURL: 'https://ryansalvador.herokuapp.com/oauth/twitter/callback'
  },
  google: {
    clientID: '232318554867-u9klo7c5s79ta3hb2q2fd5m69lomt8gs.apps.googleusercontent.com',
    clientSecret: 'JUQa4L4-stYCcoad-fnd48DF',
    callbackURL: 'https://ryansalvador.herokuapp.com/oauth/google/callback'
  }
};