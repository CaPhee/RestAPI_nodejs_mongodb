var config = require("./config"),
  app = require("express")(),
  bodyParser = require("body-parser"),
  port = process.env.PORT || config.expressPort;
var router = require("./router/user");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(checkAuth);
// app.set('view engine', 'jade');
// app.set('view options', { layout: false });

app.listen(port, () => {
  console.log("Server is running ... " + port);
});
router(app)