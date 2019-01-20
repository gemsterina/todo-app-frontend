import React from 'react';
import '../index.css';
import Task from './Task';

class TaskList extends React.Component {

    render(){
        return (
            <div>
                {
                    this.props.tasks.map((task, i) =>
                     <Task taskDescription={task.description} taskID={task.id} taskCompleted={task.completed} deleteTask={this.props.deleteTask} completeTask={this.props.completeTask} key={i} />

                    )
                }
            </div>
        );
    }
}   


export default TaskList

