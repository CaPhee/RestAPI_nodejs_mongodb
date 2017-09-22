var app = require('express')();
var userList = require('../models/user');
var html = 'HTML: ';
   app.route('/user')
    .get(async  (req, res)=> {
      var cursors = await userList.getValue();
      res.send(cursors)
    })
    // .post(userList.find);


  // app.route('/user/:userId')
  //   .get(userList.query_a_user)
  //   .put(userList.update_a_user)
  //   .delete(userList.delete_a_user);
        
module.exports = app;
