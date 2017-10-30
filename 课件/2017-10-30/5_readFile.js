const http = require('http'); //直接下载下来的模块不用路径,如果你引入自己的模块('./httpx')
const fs = require('fs'); //专门用来操作本地文件
// const hh = require('./x.js');
// http.createServer((req,res)=>{
//     res.write('hehe');
//     res.end();
// }).listen(8888);
// console.log(hh);
/*
    
    readFile:
        第一个参数：
            路径

        第二个参数:
            回调函数，
                err ->错误
                
                data -> 数据

*/

fs.readFile('1.txt',function(err, data){
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
});

