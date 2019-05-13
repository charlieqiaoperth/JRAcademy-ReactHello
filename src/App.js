import React from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import './App.css';
import Welcome from './Welcome';
import Counter from './Counter';
import WelcomeForm from './welcomeForm';
import { getWelcomeAsync } from './actions/addWelcomeAction';

class App extends React.Component {
  // constructor(props) {
  //   super(props);   
  // }
  componentDidMount(){
    const { dispatch } =this.props;     
    dispatch(getWelcomeAsync());
  }

   render(){
    const {count, welcomeList,dispatch} = this.props;
    return (
          <section className="App">
              {
                welcomeList.map((element,index) => 
                (
                  <Welcome key={index} author={element.author} content={element.content}/>
                )              
              )
              }
              
              <Counter 
              count={count}
              dispatch={dispatch}
              />
              <WelcomeForm 
              dispatch={dispatch}
              />             
          </section>
        );
  }
}

const mapStateToProps = (state) => {
  return {count:state.counter.count,
    welcomeList: state.welcomeList,
    }
}

const Appc = connect(mapStateToProps)(App);

export default Appc;
