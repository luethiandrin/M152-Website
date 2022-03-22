import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavBar from './NavBar.js'
import reportWebVitals from './reportWebVitals';

import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

import LüthiComponent from './component/luethi/LüthiComponent';
import MathezComponent from './component/mathez/MathezComponent';
import KnellwolfComponent from './component/knellwolf/KnellwolfComponent';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename={""}>
      <NavBar />
      <App />
      <Routes>
        <Route path="luethi" element={<LüthiComponent />} />
        <Route path="knellwolf" element={<KnellwolfComponent />} />
        <Route path="mathez" element={<MathezComponent />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
