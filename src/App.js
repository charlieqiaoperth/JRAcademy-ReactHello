import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Welcome from './Welcome';
import Counter from './Counter';

class App extends React.Component {
  // constructor(props) {
  //   super(props);   
  // }
   render(){
    const {count, welcomeList,dispatch} = this.props;
    return (
          <section className="App">
              {
                welcomeList.map((element,index) => 
                (
                  <Welcome key={index} name={element.name} isTeacher={element.isTeacher}/>
                )              
              )
              }
              
              <Counter 
              count={count}
              dispatch={dispatch}
              />
          </section>
        );
  }
}

const mapStateToProps = (state) => {
  return {count:state.counter.count,
    welcomeList: state.welcome}
}

const Appc = connect(mapStateToProps)(App);

export default Appc;
