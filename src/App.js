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
    const {count, dispatch} = this.props;
    return (
          <section className="App">
              <Welcome name={'Nick'} isTeather />
              <Welcome name="Charlie" />
              <Welcome name="Sam" />
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
