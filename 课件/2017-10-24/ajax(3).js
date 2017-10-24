function ajax(json){
    //默认的配置
    var settings = {
        url:'',
        method:'get',
        success:function(){},
        fail:function(){},
        data:{}
    }

    for(var attr in json){
        settings[attr] = json[attr]; 
    }

    var arr = [];
    for(var attr in settings.data){
        arr.push(attr + '=' + settings.data[attr]);
    }
    settings.data = arr.join('&');
    var ajax = new XMLHttpRequest;
    // console.log(settings.data);
    if(settings.method === 'get'){
        ajax.open('get',settings.url+'?'+settings.data,true);
        ajax.send();
    }else if(settings.method === 'post'){
        ajax.open('post',settings.url,true);
        ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        ajax.send(settings.data);
    }
    ajax.onreadystatechange = function(){
        if(ajax.readyState === 4){
            if(ajax.status >= 200 && ajax.status <= 207){
                settings.success(ajax.responseText);
            }else{
                settings.fail(ajax.status);
            }
        }
    }
}