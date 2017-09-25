var userData = require("../models/user");

var users = {
  getAll: (req, res) => {
    userData.findAll().then(data => {
      res.send(data);
    });
  }
};

module.exports = users;
