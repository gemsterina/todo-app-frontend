import React from 'react';
import '../index.css';

class Task extends React.Component {

    render(){
        return (
            <div>
                <div className="row" style={styles.taskRow}>
                    <div className="col-sm" id="task" style={this.props.taskCompleted ? styles.completedTask : null}>
                        {this.props.taskDescription}
                    </div>
                    <div className="col-sm">
                        <button type="button" className="btn btn-light" style={styles.buttonLook} onClick={this.props.completeTask.bind(null, this.props.taskID)} >Done</button>
                    </div>
    
                    <div className="col-sm">
                        <button type="button" className="btn btn-light" style={styles.buttonLook} onClick={this.props.deleteTask.bind(null, this.props.taskID)}>Delete</button>
                    </div>
                </div>


            </div>
        );
    }

}

const styles = {
     
    taskRow: {
           paddingTop: "50px",
           paddingBottom: "25px"
    },

    buttonLook: {
            
            backgroundColor: "#F7CED6",
            color: "white",
            fontWeight: "bold"
    },

    completedTask: {

            textDecoration: "line-through",
            color: "gray"
    }       
    };


export default Task;  

