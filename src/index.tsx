import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './redax/redax-store'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

export const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>

        </BrowserRouter>
        , document.getElementById('root')
    );
}

renderTree();
store.subscribe(renderTree);