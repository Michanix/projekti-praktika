/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import axios from 'axios';


function App() {

  
  return (
    <div className="App">

    

      <BrowserRouter>
      <AppRouter />
      </BrowserRouter>

    </div>
  );
} export default App;
