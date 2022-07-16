import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import 'antd/dist/antd.css';
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./api/apiSlice";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApiProvider api={apiSlice}>
      <Router>
        <App />
      </Router>
    </ApiProvider>
);
