var bodyParser = require("body-parser");
var config = require("../config"),
  app = require("express")(),
  port = process.env.PORT || config.expressPort;

var userList = require("../controllers/userController");



app.listen(port,()=>{
  console.log("Server is running "+ port);
});

app.route("/user")
    .get(userList.getAll)
    .post();

app.route("/user/:userId")
  .get()
  .put()
  .delete();
