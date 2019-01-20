import React from 'react';
import '../index.css';

class TaskEntry extends React.Component {

    constructor (props){
        super(props);

        this.state = {
            taskDescription: ""
        };

// Event binding functions
        this.onSaveClicked = this.onSaveClicked.bind(this);
        this.onTaskTextFieldUpdated = this.onTaskTextFieldUpdated.bind(this);

    }

// Method activates when save button clicked
    onSaveClicked() {

        const taskToBeAdded={
            id: (Math.random()*100),
            description: this.state.taskDescription,
            completed: false
        };
    
        this.props.onSaveTaskHandler(taskToBeAdded);

        this.setState({
            taskDescription: ""
        });
    }
// Activates when text box is changed
    onTaskTextFieldUpdated(event) {
        const description = event.target.value;

        this.setState({
            taskDescription: description
        });
    }

    render(){
        return(
            <div className="row">
                <div className="col-lg">
                       <form style = {styles.formfield}>
                            THINGS TO DO: <input type="text" value={this.state.taskDescription} name="entry" id="formColor" onChange={this.onTaskTextFieldUpdated} />
                          <button type="button" className="btn btn-light" style={styles.buttonLook}  onClick={this.onSaveClicked}> Save</button>
                      </form>
                </div> 
            </div>
        );

    }
}

const styles = {
    formfield: {
        color: "#DA248E",
        fontWeight: "bold",
        fontSize: "30px"
    },

    buttonLook: {
        
        backgroundColor: "#F7CED6",
        color: "white",
        fontWeight: "bold",
        marginLeft: "20px",
    },
}



export default TaskEntry;