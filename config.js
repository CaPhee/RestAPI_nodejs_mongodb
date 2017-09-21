
var config = {
    expressPort: 3000,
    client: {
        mongodb: {
            defaultDatabase: "mydb",
            defaultCollection: "user",
            defaultUri: "mongodb://localhost:27017"
        },
        mockarooUrl: "http://www.mockaroo.com/536ecbc0/download?count=1000&key=48da1ee0"        
    }
};

module.exports = config;