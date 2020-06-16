import React, { Component } from 'react';
import logo from './logo.svg';
import Heading from './Heading';
import Para from './Para';
import List from './List';

function App(){
  return (
    <React.Fragment>
    <Heading />
    <Para />
    <Heading />
    <List />
    <Para />
    <List />
    </React.Fragment>
  );
}

export default App;
