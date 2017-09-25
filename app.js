var config = require('./config'),
    app = require('express')(),
    port = process.env.PORT || config.expressPort;
var router = require('./router')
// app.set('views', path.join(__dirname, 'views'));
// app.use(express.static(path.join(__dirname, 'public')));

app.listen(port)

app.use(router)