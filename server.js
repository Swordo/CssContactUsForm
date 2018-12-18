const express = require('express');
const serveIndex = require('serve-index')
var bodyParser = require('body-parser')

const DB = require('./DBConnection.js');
const Info = require('./models/User.js');

const app = express();
const port = 8080;
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())



app.get('/', (req, res) => {
    app.use('/ftp', express.static('Views'), serveIndex('Views', {
        'icons': true
    }))
});
app.post('/post', function (req, res, next) {
    var user = new Info()
    user.f_name = req.body.name;
    user.l_name = req.body.l_name;
    user.email = req.body.email;
    user.phone = req.body.phone;
    user.message = req.body.message;
    user.save((err) => {
        if (err) {
            throw err;
        } else {
            res.json({
                "status": "success"
            });
        }
    })

});
app.get('/post', (req, res, next) => {
    Info.find({}, (err, data) => {
        if (err) {
            throw err;
        }
        res.json(data);
    })
})




app.listen(port, (err) => {
    if (err) {
        throw err;
    }
    console.log(`Server is running on this ${port}`);
})