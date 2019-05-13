// import React, { Component } from 'react';
import React, {Component} from 'react';
import axios from 'axios';
import { getWelcomeAsync } from './actions/addWelcomeAction';

class WelcomeForm extends Component {
    constructor(props){
        super(props);
        this.state={author:"",
                   content:"",
                };
    }

    onWelcomeSubmit =(e) => { 
        e.preventDefault();
        axios({
            method: 'post',
            url: 'https://posts-api-test.herokuapp.com/v1/posts',
            data: {
              author: this.state.author,
              content:this.state.content
            }
          })
          .then((response) => {
            this.props.dispatch(getWelcomeAsync())
          })
          
          .catch(function (error) {
            console.log(error);
          })
        
          
    }
     
    onAuthorChange =(e) => {
        this.setState({author:e.target.value})
    }
    onContentChange =(e) => {
        this.setState({content:e.target.value})
    }
    


    render() {
        return (
            <form onSubmit={this.onWelcomeSubmit} >
                <label>
                    Author:
                    <input type="text" name = "author" value = {this.state.author} onChange={this.onAuthorChange} />
                </label>
                <label>
                    Content:
                    <input type="text" name = "content" value = {this.state.content} onChange={this.onContentChange} />
                </label>
                    <input type="submit" name = "Submit" />
            </form>
        )
    }
}



// import React, {Component} from 'react';
// // import {addWelcome} from '../actions/welcomeActions';

// class WelcomeForm extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             author: '',
//             content:'',
//         }
//     }

//     onWelcomeFormSubmit = (e) => {
//         e.preventDefault();
//         console.log(this.state)
//         // this.props.dispatch(addWelcome(this.state.author, this.state.content));
//     }

//     onAuthorChange = (e) => {
//         this.setState({author:e.target.value});
//     }

//     onContentChange = (e) => {
//         this.setState({content:e.target.value});
//     }

//     render() {
//         return (
//             <form onSubmit={this.onWelcomeFormSubmit}>
//                 <label>
//                     Author:
//                     <input type="text" name="author" value={this.state.author} onChange={this.onAuthorChange}/>
//                 </label>
//                 <label>
//                     Content:
//                     <input type="text" name="content" value={this.state.content} onChange={this.onContentChange}/>
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//         );
//     }
// }

export default WelcomeForm;