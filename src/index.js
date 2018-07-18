import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './css/index.css';
import 'antd-mobile/dist/antd-mobile.css'
import './mock/index'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
