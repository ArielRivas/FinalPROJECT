import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux';
import store from "./redux/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ControlRoom from './ControlRoom/ControlRoom';
import Home from './Home/Home';
import Login from './Login/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="controlroom" element={<ControlRoom />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);



