import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { store } from "./store";
import { Provider } from "react-redux";
import {AppContainer} from './App'

ReactDOM.render(<Provider store={store}>
    <AppContainer />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
