const http = require('http');

const fs = require('fs');

/*
    localhost:88?user=xxx
    localhost:88/index.html
    1.静态文件的管理
    2.接口返回
*/
http.createServer((req,res)=>{
   let urlName = req.url; //   localhost:88?index.html
   let files = 'www';
   let obj = {
       code:0
   }
   let onOff = false;
   if(urlName !== '/favicon.ico'){
        console.log(urlName)
        if(urlName.indexOf('?')!=-1){ //有问号，走接口
            urlName = urlName.split('?')[1];
            let arr = urlName.split('&');
            for(var i=0;i<arr.length;i++){
                let a = arr[i].split('=');
                if(a[1] == 'leo'){
                    obj.code = 1;
                    obj.msg = '用户名已经注册';
                    onOff = true;
                    break;
                }
            }
            if(!onOff){ //可以注册
                obj.msg = '可以注册';
            }
            res.write(JSON.stringify(obj));
            res.end();
        }else{
            //没问号走静态文件

            fs.readFile(files+urlName,(error,data)=> {
                if(error){
                    res.write('404');
                }else{
                    res.write(data.toString());
                }
                res.end();
            });
        }
   }
   
}).listen(88);