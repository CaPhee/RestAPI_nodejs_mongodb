var userData = require("../models/user");

var users = {
  getAll: (req, res) => {
    userData.findAll().then(data => {
      res.send(JSON.stringify(data))
    });
  }
};

module.exports = users;
