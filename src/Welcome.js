// import { ReactComponent } from "*.svg";
// import { directive } from "@babel/types";
import React from 'react';

class Welcome extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    render(){
        const { name , isTeather } = this.props;
        return (
            <div>
                {
                    isTeather && 
                    <h2>Hello, {name}, I am a Teacher</h2>
                }
                {
                    !isTeather &&
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