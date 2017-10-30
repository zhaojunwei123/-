const http = require('http'); //创建一个http的服务器
/*
    request:请求（理解为接收客户端发送过来的信息）
    response:响应（理解成“发送”给客户端）

    listen(端口号)
        当开启一个服务之后需要一直开启，因为用户什么时候访问是不知道的，
        通过listen一直将这个服务开启着，直到有用户来进行访问就执行所需的服务。

    进入目录 -> shift + 右键 -> 打开命令窗口
*/

const server = http.createServer(function(request,response){
   //console.log('已经请求服务器了');
   //https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=s&
   response.write('window.baidu.sug({q:"s",p:false,s:["steam","孙 政 才","双世宠妃","搜狗输入法下载","搜狗输入法","顺丰快递单号查询","三国杀","苏宁易购","搜房网","上海天气"]})');
   response.end();
});
server.listen(9090);



