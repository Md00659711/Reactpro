import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BodyData from './BodyData';
import * as serviceWorker from './serviceWorker';
import App from './App';
import SearchBar from './SearchBar';

ReactDOM.render(<div><BodyData/>  
	<App/>
	<App/>
	<App/>
	<App/></div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
