let express = require('express')
let app = express()
app.use( function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
let sliders = require('./mock/slider')
app.get('/sliders',function (req,res) {
    res.json(sliders)
})
app.listen(3000)