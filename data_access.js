var { MongoClient } = require("mongodb"),
  assert = require("assert"),
  { ObjectId } = require("mongodb"),
  util = require("util");
var configMongoClient = require("./config").client.mongodb;

var uri = util.format(
  "%s://%s:%d/%s",
  configMongoClient.defaultUri,
  configMongoClient.host,
  configMongoClient.port,
  configMongoClient.defaultDatabase
);

function open() {
  // Connection URL. This is where your mongodb server is running.

  return new Promise((resolve, reject) => {
    // Use connect method to connect to the Server
    MongoClient.connect(uri, (err, db) => {
      if (err) {
        reject(err);
      } else {
        resolve(db);
      }
    });
  });
}

function close(db) {
  //Close connection
  if (db) {
    db.close();
  }
}

let db = {
  open: open,
  close: close
};

module.exports = db;
