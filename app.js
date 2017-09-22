var config = require('./config.js'),
    app = require('express')(),
    port = process.env.PORT || config.expressPort,
    user = require('./router/user') ;

// app.set('views', path.join(__dirname, 'views'));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(user);
app.listen(port)