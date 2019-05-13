import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware} from 'redux';
import { Provider} from 'react-redux';

import './index.css';
import App from './App';
import rootReducer from './reducer/rootReducer';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer,applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());//后边的代码等待澄清

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
serviceWorker.unregister();