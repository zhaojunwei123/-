const http = require('http');
const fs = require('fs');
const querystring = require('querystring'); 

/*
    http://localhost?act=add&user=xxx&pass=123;
        act{
            add  注册
            login  登录
        }
    {
       user:xxx,
       pass:123 
    }

*/
let sql = [{"name":"leo","password":123},{"name":"马智","password":123},{"name":"徐婷","password":123}]
http.createServer((req,res)=>{
    const fileName = 'www';  //www/index.html
    const urlName = req.url;
    let addName = (urlName == '/')?fileName+'/index.html':(fileName + urlName);
    let result = '';
    /*
        如果用户使用post去请求，那么就要用
        req.on('data',(dd)=>) 去接收当前数据,dd就是当前的数据

        req.on('end',()=>{}) 当数据接收完成会进end这个事件，只要在end中说明数据已经传输完成

        end之后不能有write了，不然会报错。
    */
    if(urlName == '/user'){
        req.on('data',(dd)=>{
            result += dd;
        });
        req.on('end',()=>{
            //把字符串转成对象
            let json = {code:0};
            result = querystring.parse(result.toString());
            let onOff = sql.find(e=>e.name == result.user);
            // console.log(typeof result);
            if(result.act == 'login'){
                if(onOff){
                    if(onOff.name == result.user && onOff.password == result.pass){
                        json.msg = 'success login';
                    }else{
                        json.code = 1;
                        json.msg = 'username or password error!';
                    }
                }else{
                    json.code = 2;
                    json.msg = 'no person';
                }
                
                // console.log(json)
                res.write(JSON.stringify(json));
                res.end();
            }
        });
    }else{

        fs.readFile(addName,(error,data)=>{
            if(error){
                res.write('404');
            }else{
                res.write(data);
            }
            res.end();
        });
    }

}).listen(80);
