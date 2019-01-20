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

    this.addTask=this.addTask.bind(this);
    this.deleteTask=this.deleteTask.bind(this);
    this.completeTask=this.completeTask.bind(this);
  }

  addTask(task){

    let currentListOfTasks=this.state.tasks;
    currentListOfTasks.push(task);
    this.setState({
        tasks: currentListOfTasks
    });
  }

  deleteTask(taskID){

    let currentListOfTasks=this.state.tasks;
    let tasksToKeep = currentListOfTasks.filter((currentTask) => currentTask.id !== taskID);
    this.setState({ 
      tasks: tasksToKeep
    });
  }

  completeTask(taskID){

    let currentListOfTasks=this.state.tasks;
    let modifiedListOfTasks=currentListOfTasks.map((currentTask) => {
      if(currentTask.id === taskID){
        currentTask.completed=true;
      }
       return currentTask;
     })
    this.setState({
      tasks: modifiedListOfTasks
    })
  }

  render() {
    return (
      <div className="container">
        <Header />
        <TaskEntry onSaveTaskHandler={this.addTask}/>
        <TotalCounter totalTasks={this.state.tasks.length}/>
        <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} completeTask={this.completeTask}/>
      </div>
    );
  }
}

export default App;
