import React, { Component } from 'react';
import Header from './components/Header';
import TaskEntry from './components/TaskEntry';
import TotalCounter from './components/TotalCounter';
import TaskList from './components/TaskList';




class App extends Component {

constructor(props) {
  super(props);

  this.state = { 
    tasks: []
  };
}

  render() {
    return (
      <div className="container">
        <Header />
        <TaskEntry />
        <TotalCounter />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
