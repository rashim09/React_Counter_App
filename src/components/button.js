import React,{Component} from 'react';
import './button.css';


class mainPage extends Component {


    
render(){
    return(
        <div>
            <button className="btn-danger" onClick={this.props.clicked}>{this.props.children}</button>
        </div>

    );
}
}

export default mainPage;