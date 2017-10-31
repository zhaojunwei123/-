const express = require('express'); //引入express框架
const app = express();//开启服务
const bodyParser = require('body-parser');//作用是对post请求的请求体进行解析
/*
    中间件 static  进行静态资源的托管
    http://www.cnblogs.com/chyingp/p/nodejs-learning-express-body-parser.html
*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('www'));
const sql = [{"name":"李庚","pass":123}];
//登录
app.post('/user',function(req,res){
    // console.log(req.body);
    const urlObj = req.body;
    const json = {code:0};
    const onOff = sql.find(e=>e.name == urlObj.user);
    if(urlObj.act == 'login'){
        if(onOff){
            if(onOff.pass == urlObj.pass){
                json.msg = 'seccess login';
            }else{  
                json.msg = 'username or password error!';
                json.code = 1;
            }
        }else{
            json.code = 2;
            json.msg = 'no person';
        }
    }
    res.send(JSON.stringify(json));
});

app.get('/user',(req,res)=>{
   const urlObj = req.query;
   const json = {"code":0};
   if(urlObj.act == 'add'){
        const onOff = sql.find(e=>e.name == decodeURI(urlObj.user));
        if(onOff){
            json.msg = 'username exist';
            json.code = 1;
        }else{
            sql.push({"name":decodeURI(urlObj.user),"pass":urlObj.pass});
            json.msg = 'add success!';
        }
        res.send(JSON.stringify(json));
   }
});

app.listen(80);


