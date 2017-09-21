module.exports = function(app) {
  var userList = require('../models/user');

  app.route('/user')
    .get(userList.list_all_user)
    .post(userList.create_a_user);


  app.route('/user/:userId')
    .get(userList.query_a_user)
    .put(userList.update_a_user)
    .delete(userList.delete_a_user);
};