import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={count:0};
    }
    handlerAdd = ()=>{
        this.setState({count:this.state.count+1});
    }
    handelerSubtract = ()=>{
        this.setState({count:this.state.count-1});
    }
    render(){
       return (
            <div>
            <span>counter is : {this.state.count} </span>
            <button onClick={this.handlerAdd}>+</button>
            <button onClick={this.handelerSubtract}>-</button>
            </div>
       )
    }

}

export default Counter;