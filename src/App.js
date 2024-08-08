import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import './App.css'
import Successful from './successful_login';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="./successful_login" element={<Successful />} />
    </Routes>
  </Router>
);

export default App;
