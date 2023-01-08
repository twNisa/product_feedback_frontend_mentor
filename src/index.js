import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home';
import { createBrowserRouter, RouterProvider, Routes, Route, Router, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reducers/store';
import Roadmap from "./pages/Roadmap/Roadmap"
import App from "./App.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

