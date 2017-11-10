import data from '../data/todosData';

export default function req(url) {

    return new Promise( (resolve, reject)=>{

        if(url==="todos"){
            setTimeout( ()=> {
                resolve(data);
            }, 2000 )
        }else{
            reject({
                code: 2,
                data: 'url 写错了'
            })
        }

    });
}

// let promise = req("http://localhost:80/todo");
//
// promise
//     .then(
//         (fdjhk)=>{
//             console.log(fdjhk);
//         }
//     )
//     .catch( (err)=>{
//         if(err.code===2){
//             console.log(err.data);
//         }
//     } )
// ;
