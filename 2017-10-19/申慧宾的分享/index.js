var result = [];

// var arr = [1,3,4,5,[6,[0,1,5],9],[2,5,[1,5]],[5]];
// function fn(arr){
//     for(var i=0;i<arr.length;i++){
//         if(typeof arr[i]=='object'&&arr[i].length>=1){
//             fn(arr[i])
//         }else{
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// console.log(fn(arr));

// var c=[1,3,4,5,[6,[0,1,5],9],[2,5,[1,5]],[5]];
// var b = c.toString().split(',')
// console.log(b);



/*
    var fn = e => {}
*/

// const flatten = (arr1) => arr1.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

var arr1 = [0,1,2,3];

console.log(arr1.reduce(function(a,b){
    return a + b;
},4));


var arr1=[1,3,4,5,[6,[0,1,5],9],[2,5,[1,5]],[5]];
function flatten(arr1){
   return  arr1.reduce(function(a,b){
        return a.concat( Array.isArray(b)? flatten(b) : b)
    },[]);
}
var result = flatten(arr1);
// console.log(result);
