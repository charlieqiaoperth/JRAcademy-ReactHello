// import { ReactComponent } from "*.svg";
// import { directive } from "@babel/types";
import React from 'react';

class Welcome extends React.Component {
  
    render(){
        const { author , content } = this.props;
        return (
            <p>{`Hello, ${author}, ${content}`}</p>            
        )
    }
}

// const Welcome = (props) => {
//         return (
//             <div>
//                 {
//                     props.isTeather && 
//                     <h2>Hello, {props.name}, I am a Teacher</h2>
//                 }
//                 {
//                     !props.isTeather &&
//                     <p>{`Hello ${props.name}, I am a student`}</p>
//                 }
//             </div>
//         )
// }


export default Welcome;