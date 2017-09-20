var mongo = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

mongo.connect('mongodb://127.0.0.1:27017/mydb',(err,db)=>{
   db.collection('user').find().toArray((err,data)=>{
       console.log(data)
   })
   db.close()
})
