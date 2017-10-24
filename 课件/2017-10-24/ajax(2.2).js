function ajax(url,method,data,succ,fail){
    var ajax = new XMLHttpRequest;
    if(method === 'get'){
        ajax.open('get',url+'?'+data,true);
        ajax.send();
    }else if(method === 'post'){
        ajax.open('post',url,true);
        ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        ajax.send(data);
    }
    ajax.onreadystatechange = function(){
        if(ajax.readyState === 4){
            if(ajax.status >= 200 && ajax.status <= 207){
                succ(ajax.responseText);
            }else{
                fail(ajax.status);
            }
        }
    }
}