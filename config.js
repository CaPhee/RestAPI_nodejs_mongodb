var config = {
    expressPort: 3000,
    client: {
        mongodb: {
            defaultDatabase: "O7DB",
            defaultCollection: "Department",
            defaultUri: "mongodb",
            userName : process.env.MONGODB_USERNAME || '',
            password : process.env.MONGODB_PASSWORD || '',
            host: process.env.MONGODB_HOST || 'localhost',
            port : process.env.MONGODB_PORT || 27017,
        },
        mockarooUrl: "http://www.mockaroo.com/536ecbc0/download?count=1000&key=48da1ee0"        
    },
    server : {
        port : process.env.WEB_PORT || 9999
    },
};

module.exports = config;