import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import { Provider} from 'react-redux';

import './index.css';
import App from './App';
import rootReducer from './reducer/rootReducer';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);//后边的代码等待澄清

ReactDOM.render(
    <Provider stroe={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

// import './index.css';
// import App from './App';
// import rootReducer from './reducer/rootReducer';
// import * as serviceWorker from './serviceWorker';

// const store = createStore(rootReducer);

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>, 
//     document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

