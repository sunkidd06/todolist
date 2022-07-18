import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import 'antd/dist/antd.css';
// import { ApiProvider } from "@reduxjs/toolkit/query/react";
// import { apiSlice } from "./api/apiSlice";
import { Provider } from "react-redux";
import { store } from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
