import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from './pages/authentication/Authentication';
import MachineLearning from './pages/machine_learning/MachineLearning';
import Hosting from './pages/hosting/Hosting';
import Functions from './pages/functions/Functions';
import Database from './pages/database/Database';
import Storage from './pages/storage/Storage';
import { ThemeProvider } from '@emotion/react';
import { dashboardTheme } from './dashboardTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={ dashboardTheme }>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path="authentication" element={<Authentication />} />
          <Route path="database" element={<Database />} />
          <Route path="functions" element={<Functions />} />
          <Route path="hosting" element={<Hosting />} />
          <Route path="machine-learning" element={<MachineLearning />} />
          <Route path="storage" element={<Storage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,

);

reportWebVitals();
