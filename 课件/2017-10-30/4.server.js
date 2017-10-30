const http = require('http'); //直接下载下来的模块不用路径,如果你引入自己的模块('./httpx')
const fs = require('fs'); //专门用来操作本地文件
// http.createServer((req,res)=>{
//     res.write('hehe');
//     res.end();
// }).listen(8888);

/*
    writeFile:写入文件
        三个参数：
            1.文件名
            2.内容
            3.回调（err）
*/

fs.writeFile('1.txt','hehe',function(err){
    if(err){
        console.log('错误');
    }
    console.log('创建成功了');
});

