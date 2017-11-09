

export default class extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let {location} = this.props;
        let {from} = location.state || '';
        return (
            <div>
                剧集的视图内容
                <div> 哪里过来的: {from}</div>
            </div>

        )
    }
}
