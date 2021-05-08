/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/pages/About';
import Books from './components/pages/Books';
import Book from './components/pages/Book';
import {
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      	<Switch>
          <Route exact path="/">
            <div className="App-box content">
              <Home />
            </div>
          </Route>
          <Route path="/about">
            <div className="App-box content">
              <About />
            </div>
          </Route>
          <Route path="/books">
            <div className="App-box content">
              <Books />
            </div>
          </Route>
          <Route path="/:id" children={<Book />}/>
		  </Switch>
      <div className="App-box header">
        <Header/>
      </div>
    </div>
  );
};