let express = require('express')
let session  = require('express-session')
let bodyParser = require('body-parser') //用json 返回

let app = express()
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'sjsj'
}))
app.use(bodyParser.json()); //将数据转换成对象放到req.body上
app.use( function(req, res, next) {
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
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

let users = []//存放所有用户
app.post('/login',function (req,res) {
    console.log(req.body)
    let {username,password} = req.body;  //因为是post请求  所以不能用query
    let user = users.find(item=>item.username == username)
    if(user){
        req.session.user = req.body
        res.json({msg:"登录成功",error:0,user:username})
    }else{
        res.json({msg:"登录失败",error:1})
    }
    
})
app.post('/reg',function (req,res) {
        let {username,password} = req.body
        let user = users.find(item=>item.username == username)
    if(user){
            res.json({msg:"用户已经存在",error:1})
    }else{
            users.push({username,password})
            res.json({msg:"保存成功",error:0})
    }
})

//校验用户信息的
app.get('/validate',function (req,res) {
    if(req.session.user){
        res.json({msg:"",error:0,user:req.session.user.username})
    }else{
        res.json({msg:"",error:1,user:null})
    }
})
app.listen(3000)