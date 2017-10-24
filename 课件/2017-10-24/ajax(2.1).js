function ajax(url,method,data,callback){
    var ajax = new XMLHttpRequest;
    if(method === 'get'){
        ajax.open('get',url+'?'+data,true);
        ajax.send();
    }else if(method === 'post'){
        ajax.open('post',url,true);
        ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        ajax.send(data);
    }
    ajax.onload = function(){
        callback(ajax.responseText);
    }
}