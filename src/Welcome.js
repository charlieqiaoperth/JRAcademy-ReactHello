// import { ReactComponent } from "*.svg";
// import { directive } from "@babel/types";
import React from 'react';

class Welcome extends React.Component {
  
    render(){
        const { name , isTeacher } = this.props;
        return (
            <div>
                {
                    isTeacher && 
                    <h2>Hello, {name}, I am a Teacher</h2>
                }
                {
                    !isTeacher &&
                    <p>{`Hello ${name}, I am a student`}</p>
                }
            </div>
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