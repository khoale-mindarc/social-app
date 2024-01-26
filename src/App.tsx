import React from 'react';
import './App.css';
import './styles/sb-admin-2.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './components';
import { Login } from './pages/Account';

function App() {
  return (
    <div className='App' id="wrapper">
      <Router>
        <Routes>
          <PrivateRoute>
            <Login />
          </PrivateRoute>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
