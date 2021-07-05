import React from 'react';
import ReactDOM from 'react-dom';
// Los estilos como bootstrap se deben llamar antes que la hoja de estilos css
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import './index.css';

import { BrowserRouter as Router, Route} from 'react-router-dom'
import MainHeader from './Common/MainHeader';
import MainNav from './Common/MainNav';
import MainFooter from './Common/MainFooter';
import Nosotros from './components/Nosotros';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MainHeader/>
      <MainNav/>
        <main id="main-content">
          <Route exact path="/" component={App}/>
          <Route exact path="/nosotros" component={Nosotros}/>
        </main>
      <MainFooter/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
