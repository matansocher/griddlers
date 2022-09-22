import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import './styles/index.css';
import App from './components/App';
import Game from './components/Game';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/game" component={Game}/>
                <Route path="/" component={App}/>
            </Switch>
        </Router>
    </Provider>,
document.getElementById('root'));
