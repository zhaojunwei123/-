
let divClick = (props)=>{
    let {changeVal} = props;
    changeVal(Math.random())
}


export default function(props){

    let {location, changeVal} = props;
    let {from} = location.state || '';

    return (
        <div>
            剧集的视图内容
            <div
                onClick={ ()=>divClick(props) }
            > 哪里过来的: {from}</div>
        </div>

    )
}

//
//  class A extends Component{
//     constructor(props){
//         super(props);
//         this.divClick = this.divClick.bind(this);
//     }
//
//     divClick(){
//         let {changeVal} = this.props;
//         changeVal(Math.random())
//     }
//
//     render(){
//         let {location} = this.props;
//         let {from} = location.state || '';
//         let {divClick} = this;
//         return (
//             <div>
//                 剧集的视图内容
//                 <div
//                     onClick={divClick}
//                 > 哪里过来的: {from}</div>
//             </div>
//
//         )
//     }
// }
