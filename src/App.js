import React, { Component } from 'react';
import Header from './components/Header';
import TaskEntry from './components/TaskEntry';
import TotalCounter from './components/TotalCounter';
import TaskList from './components/TaskList';
import Task from './components/Task';




class App extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      tasks: []
    };

    this.addTask=this.addTask.bind(this);
  }

  addTask(task){

    let currentListOfTasks=this.state.tasks;
    currentListOfTasks.push(task);
    this.setState({
        tasks: currentListOfTasks
    });
  }


  render() {
    return (
      <div className="container">
        <Header />
        <TaskEntry onSaveTaskHandler={this.addTask}/>
        <TotalCounter />
        <Task />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
