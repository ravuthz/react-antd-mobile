import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Link,
} from "react-router-dom";

import './index.css';

import reportWebVitals from './reportWebVitals';

import ApplicationPage from './components/Application/ApplicationPage';
import ApplicationHomePage from './components/Dashboard/pages/HomePage';

import DashboardPage from './components/Dashboard/DashboardPage';
import DashboardHomePage from './components/Dashboard/pages/HomePage';
import DashboardUserPage from './components/Dashboard/pages/UserPage';
import DashboardOtherPage from './components/Dashboard/pages/OtherPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ApplicationPage />}>
          <Route index element={<ApplicationHomePage />} />
          <Route path="dashboard" element={<DashboardPage />}>
            <Route path=":id" element={<DashboardOtherPage />} />
            <Route path="user" element={<DashboardUserPage />} />
            <Route index element={<DashboardHomePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
