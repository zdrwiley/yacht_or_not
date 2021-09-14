import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Yacht } from './components/Yacht-or-not';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    < Yacht/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);