function ajax(url,method,data,callback){
    var ajax = new XMLHttpRequest;

    ajax.open(method,url+'?'+data,true);

    ajax.send();

    ajax.onload = function(){
        callback(ajax.responseText);
    }

    // ajax.open('post','php/post.php');

    // ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

    // ajax.send('user='+txt.value);
}