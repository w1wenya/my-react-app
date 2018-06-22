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
let lessons = require('./mock/lessonList')
app.get('/sliders',function (req,res) {
    res.json(sliders)
})
app.get('/lessons',function (req,res) {
       let { limit,offset,type} = req.query
    limit = parseInt(limit)
    offset = parseInt(offset)
    type = parseInt(type)
    let newlesson =  lessons.lessons.filter(item=>{
        if(type===0){
            return true
        }
            return item.type === type

    })
    let hasMore = true
    let len = newlesson.length
    if(len<offset+limit){
           hasMore = false
    }
    newlesson = newlesson.slice(offset,offset+limit)
    res.json({hasMore,list:newlesson})
})
app.listen(3000)