
export default class extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let {location, val} = this.props;
            let {from} = location.state || '';
        return (
            <div>
                电影视图的内容
                <div> 哪里过来的: {from}</div>
                <div>剧集点击的内容: {val}</div>
            </div>
        )
    }
}
