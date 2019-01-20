import React from 'react';
import '../index.css';
import Task from './Task';

class TaskList extends React.Component {

    render(){
        return (
            <div>
                {
                    this.props.tasks.map((task, i) =>
                     <Task taskDescription={task.description} taskID={task.id} deleteTask={this.props.deleteTask} key={i} />

                    )
                }
            </div>
        );
    }
}   


export default TaskList

