import React, { Component } from 'react';
import Header from './components/Header';
import InputBox from './components/InputBox';
import TotalCounter from './components/TotalCounter';



class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <InputBox />
        <TotalCounter />
      </div>
    );
  }
}

export default App;
