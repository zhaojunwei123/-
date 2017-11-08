

export default class extends Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props, 'teleplay');
        return (
            <div>剧集的视图内容</div>
        )
    }
}
