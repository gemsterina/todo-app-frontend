import React from 'react';
import '../index.css';

class TotalCounter extends React.Component {

    render(){
        return (
            <div className= "row" style={styles.taskRow}>
                <div style={styles.counter} className="col-lg">
     
                 TOTAL TASKS: {this.props.totalTasks}
    
                </div>
            </div>);
    }

}

const styles = {

   counter: {
        backgroundColor:"#DF8293",
        padding:"20 0 20 0",
        borderRadius:"30px",
        fontSize:"30px",
        fontWeight:"bold",

    },

    taskRow: {
        paddingTop: "50px",
        paddingBottom: "25px"
    },
}

export default TotalCounter;  