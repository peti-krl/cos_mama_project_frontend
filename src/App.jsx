import React from 'react';
import './index.scss';
import Navbar from './app-components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'

export const App = () => {
  return (
    <Router>
      <Navbar/>
    </Router>
  )
};

