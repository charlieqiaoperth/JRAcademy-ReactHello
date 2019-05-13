import axios from 'axios';
export const ADD_WELCOME="ADD_WELCOME";
export const GET_WELCOME="GET_WELCOME";
export const GET_WELCOME_SUCESS="GET_WELCOME_SUCESS";
export const  GET_WELCOME_FAIL="GET_WELCOME_FAIL";




// export const addWelcome = (author,content) => {
//    return {
//         type: ADD_WELCOME,
//         payload:{
//             author,
//             content
//         }
//     }
// };

// export const postWelcomeAsyc =(author,content) => {
//     // return (dispatch)
//     axios({
//         method: 'post',
//         url: 'https://posts-api-test.herokuapp.com/v1/posts',
//         data: {
//           author: {author},
//           content:{content}
//         }
//       })
//       .then(function (response) {
//         console.log(response);
//       })
      
//       .catch(function (error) {
//         console.log(error);
//       })
     
// };

// export const postWelcomeAsync=()=>{
//     return (dispatch)=> {
//        dispatch(getWelcomeAsync())
//     }
// }




export const getWelcome = () =>{
    return {
        type:GET_WELCOME
    }
};

export const getWelcomeSucess = (welcomeList) =>{
    return {
        type:GET_WELCOME_SUCESS ,
        payload:{welcomeList}
    }
};

export const getWelcomeFail = () =>{
    return {
        type:GET_WELCOME_FAIL
    }
}


export const getWelcomeAsync = () =>{
    return (dispatch) => {
        // dispatch(getWelcome());
        return axios.get('https://posts-api-test.herokuapp.com/v1/posts') 
        .then(response =>{
            dispatch(getWelcomeSucess(response.data));
        },
        error =>{
            dispatch(getWelcomeFail())
        })
    }
}