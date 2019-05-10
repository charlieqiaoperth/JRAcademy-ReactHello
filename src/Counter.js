import React from 'react';
import { increment, decrement } from './actions/counterAction';
class Counter extends React.Component{
     
    render(){
        const { count, dispatch} =this.props;
       return (
            <div>
            <span>counter is : {count} </span>
            <button onClick={() =>dispatch(increment(1))}>+</button>
            <button onClick={() =>dispatch(decrement(1))}>-</button>
            </div>        
       )
    }

}

export default Counter;