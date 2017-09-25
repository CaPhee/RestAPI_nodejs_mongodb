var db = require('../data_access')
var data 
var userModel = {
    findAll: function () {
        return db.open()
            .then((db) => {
                return db.collection('Department')
            })
            .then((depa) => {
                return depa.find().toArray()
                db.close()
            })
            .catch((err) => {
                console.error(err)
            })
    }
}

module.exports = userModel
