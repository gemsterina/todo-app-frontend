import React, { Component } from 'react';
import Header from './components/Header';
import InputBox from './components/InputBox';
import TotalCounter from './components/TotalCounter';
import TaskList from './components/TaskList';



class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <InputBox />
        <TotalCounter />
        <TaskList />
      </div>
    );
  }
}

export default App;
