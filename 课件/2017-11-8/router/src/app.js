
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
// Router
//     history
import Nav from './component/Nav';
import Home from './container/home/Home';
import Movie from './container/movie/Movie';
import Teleplay from './container/teleplay/Teleplay';

function Gl(){
    return (
        <div>dfsljlkjlk</div>
    )
}

class App extends Component{


    render(){
        let {history, location, match} = this.props;

        return (
            <div>
                <Nav history={history} />
                <Route exact path="/" component={Home} />
                <Route path="/teleplay" component={Teleplay} />
                <Route path="/movie" component={Movie} />
            </div>
        )
    }
}

ReactDOM.render(
    <Router>
        <Route path='/' component={App} />
    </Router>
    ,
    document.getElementById('root')
);
