const http = require('http'); //直接下载下来的模块不用路径,如果你引入自己的模块('./httpx')
const fs = require('fs'); //专门用来操作本地文件
http.createServer((req,res)=>{
    //urlName是前端发送的信息
    let urlName = req.url;
    let na = 'www';
    // console.log(urlName); //  /index.html
    //因为谷歌浏览器会默认给服务器发送一个favicon.ico,如果文件中没有就报错
    if(req.url !== '/favicon.ico'){
        //na + urlName = www/index.html
        fs.readFile(na + urlName,function(err, data){
            if(err){ //如果文件没有读取出来走err
                res.write('404');
            }else{
                //文件读取出来了，data->Buffer格式的，需要使用toString去转一下
                res.write(data.toString());
            }
            res.end();
        });
    }
    
}).listen(8888);



