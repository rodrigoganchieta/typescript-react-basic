import React from 'react';
import logo from '../logo.svg';
import '../App.css';

export function HelloWorld() {
  return (
    <header className="App-header">
      <h1>Hello World</h1>
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
}
