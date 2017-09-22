var db = require('../data_access')

async function getValue(){
    let connect, acessCollection, query;

    connect = await db.open();
    acessCollection = await connect.collection('Department');
    query = await acessCollection.find().toArray();

    console.log(query)
    return query;
}
module.exports = {
    getValue: getValue
}