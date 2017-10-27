import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Hello />, document.getElementById('root'));
registerServiceWorker();
