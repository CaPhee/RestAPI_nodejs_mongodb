var config = require('/config.js'),
    app = require('express')(),
    port = process.env.PORT || config.expressPort;

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port)