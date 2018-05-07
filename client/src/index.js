import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './custom.css';
import "react-table/react-table.css";

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//jquery
import 'jquery/dist/jquery.min';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
