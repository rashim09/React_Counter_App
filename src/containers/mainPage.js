import React,{Component} from 'react';
import Button from '../components/button';
import Header from '../components/header';
import '../components/button.css';


class mainPage extends Component {
    state = {
        counter:0,
        title:'Counter APP'
    }
    onIncrementhandler = () => {
        this.setState( ( prevState ) => { 
            return { counter: prevState.counter + 1 } 
        });
}
    
    onDecrementhandler = () => {
        this.setState( ( prevState ) => {
            return { 
                counter: prevState.counter - 1,
                }
        } );
    }

    onallClearhandler=()=>{
        this.setState( () => {
            return { 
                counter: 0
                }
        } );
    }

render(){
    return(
        <div  className="butt">
        <Header title={this.state.title}/>
        <div className="some"> 
            <Button clicked={this.onIncrementhandler.bind(this)}>+</Button>
            <Button clicked={this.onallClearhandler.bind(this)}>Refresh</Button>
            <Button clicked={this.onDecrementhandler.bind(this)}>-</Button>
        </div>
           
            <p className="header"> {this.state.counter}</p>
        </div>

    );
}
}

export default mainPage;