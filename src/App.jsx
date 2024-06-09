//import { useState } from 'react'
import './App.css'
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';

export default class App extends Component {
  d = "i love you";
  render() {
    return (
      <div>
        <NavBar/>
        <News/>
      </div>

    )
  }
}

