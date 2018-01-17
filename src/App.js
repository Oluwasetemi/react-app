import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HelloWorld from './HelloWorld';
import HelloWorldList from './HelloWorldList';
import AddGreeter from './AddGreeter';


const App = () => {
  return (
    <div className="App">
      <HelloWorld name="Ayo" />
      <HelloWorld name="Setemi" />
      <HelloWorld name="Bolade" />
      <HelloWorld name="Bolade1" />
      <HelloWorld name="Bolade2" />
      <HelloWorld name="Bolade3" />
      <HelloWorld name="Bolade4" />
      <HelloWorld name="Bolade5" />
      <HelloWorld name="Bolade6" />
      <HelloWorldList />
    </div>
  );
}

export default App;
