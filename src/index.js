import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RootView from './RootView';
import FrontView from './FrontView';
import TopView from './TopView';
import LeftView from './LeftView';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RootView />, document.getElementById('root'));
ReactDOM.render(<FrontView />, document.getElementById('front'));
ReactDOM.render(<TopView />, document.getElementById('top'));
ReactDOM.render(<LeftView />, document.getElementById('left'));
registerServiceWorker();
