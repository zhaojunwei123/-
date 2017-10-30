/*
    创建一个服务器
*/
const http = require('http');

http.createServer(function(req,res){
    //console.log(req.url);
    let str = '/?user=leo';
    
    if(req.url == str){
        res.write('{"code":"0","mag":"成功"}');
        res.end();
    }else{
        res.write('{"code":"1","mag":"shibai"}');
        res.end();
    }

   
}).listen(80);

