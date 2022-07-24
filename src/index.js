import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./redux/store";
import Home from './Home/Home';
import Login from './Login/Login';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}></Provider>
    <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
     <Router><App /></Router>       
  </React.StrictMode>
);
