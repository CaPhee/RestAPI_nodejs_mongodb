

var userList = require("../controllers/userController");


module.exports = function(app) {
  app.route("/user")
    .get(userList.getAll)
    .post();

  app.route("/user/:userId")
    .get()
    .put()
    .delete();
};
