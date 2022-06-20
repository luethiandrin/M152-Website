import * as React from 'react';
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

import LuethiComponent from './component/luethi/LüthiComponent';
import MathezComponent from './component/mathez/MathezComponent';
import KnellwolfComponent from './component/knellwolf/KnellwolfComponent';
import WebcamComponent from './component/webcam/WebcamComponent';
import VideoComponent from './component/video/VideoComponent';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename={""}>
      <NavBar />
      <App />
      <Routes>
        <Route path="" element={<VideoComponent />} />
        <Route path="luethi" element={<LuethiComponent />} />
        <Route path="knellwolf" element={<KnellwolfComponent />} />
        <Route path="mathez" element={<MathezComponent />} />
        <Route path="webcam" element={<WebcamComponent />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
