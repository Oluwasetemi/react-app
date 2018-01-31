import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HelloWorld from './HelloWorld';
import HelloWorldList from './HelloWorldList';
import AddGreeter from './AddGreeter';


const App = () => {
  return (
    <div className="App">
      <HelloWorldList />
      <HelloWorldList />
      <HelloWorldList />
      <HelloWorldList />
      <HelloWorldList />
      <HelloWorldList />
      <HelloWorldList />
      <HelloWorldList />
      <HelloWorldList />
    </div>
  );
}

export default App;
