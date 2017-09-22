var db = require('../data_access')

console.log("hello");
function find(){
    let database = null;
    db.open()
    .then((db)=>{
        database = db;
        return db.collection('Department')
    })
    .then((depa)=>{
        debugger
        var test = console.log(depa.find().limit(2));
        return depa.find()
    })
    .then((result)=>{
        var cursor = result
        cursor.forEach((data)=>{
            console.log(data);
        })
        database.close();
    })
    .catch((err)=>{
        console.error(err)
    })
}

find()