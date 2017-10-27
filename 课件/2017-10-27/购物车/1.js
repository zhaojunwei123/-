const ul = document.getElementById('ul1');
const ul2 = document.getElementById('ul2');
const lis = Array.from(ul.getElementsByTagName('li'));
let arr = JSON.parse(localStorage.getItem('data')) || [];
render(arr);

window.addEventListener('storage',function(){
    arr = JSON.parse(localStorage.getItem('data')) || [];
    // console.log(arr);
    render(arr);
});

lis.forEach((e)=>{
    e.onclick = function(){
        if(!arr.includes(e.innerHTML)){
            arr.push(e.innerHTML);
            render(arr);
            localStorage.setItem('data',JSON.stringify(arr));
        }
    }
});

ul2.onclick = function(ev){
    if(ev.target.tagName === 'LI'){
        arr = arr.filter((e)=>e!=ev.target.innerHTML);
        localStorage.setItem('data',JSON.stringify(arr));
        ev.target.remove();
    }
}

function render(arr){
    let html = '';
    arr.forEach((e)=>{
        html += `<li>${e}</li>`;
    });
    ul2.innerHTML = html;
}



