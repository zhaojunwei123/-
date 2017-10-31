const http = require('http');
const fs = require('fs');

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
    // res.write('hello');
    // res.end();
    const fileName = 'www';  //www/index.html
    const urlName = req.url;
    //如果给你一个/路径，那么默认走index.html
    let addName = (urlName == '/')?fileName+'/index.html':(fileName + urlName);
    if(urlName.indexOf('?')!=-1){ //有，说明走接口
        //queryString
        let str = urlName.split('?')[1];
        let obj = {};
        let arr = str.split('&'); //[user=xxx,pass=123]
        arr.forEach((e)=>{
            obj[e.split('=')[0]] = e.split('=')[1];
        });
        let onOff = false;
        let json = {code:0};

        switch(obj.act){
            case 'add' ://注册  判断用户名是否已被注册
                for(var i=0;i<sql.length;i++){
                    //说明已被注册
                    if(sql[i].name == decodeURI(obj.user)){
                        onOff = true;
                        break;
                    }
                }
                if(!onOff){ //可以注册
                    let person = {}
                    person.name = decodeURI(obj.user);
                    person.password = obj.pass;
                    sql.push(person);
                    json.msg = 'success';
                    console.log(sql);
                }else{
                    json.code = 1;
                    json.msg = 'fail';
                }

                break;
            case 'login' : //登录
                break;
        }

        res.write(JSON.stringify(json));
        res.end();

        // console.log(obj);
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
