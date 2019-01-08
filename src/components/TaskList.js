import React from 'react';
import '../index.css';

class TaskList extends React.Component {

    render(){
        return (
            <div>
                <div className = "row" style={styles.list} style={styles.rowHeight}>
                    <div className="col-sm" style={styles.task}>
                        Task 1
                    </div>
                    <div className="col-sm">
                        <button id = "button" type="button" className="btn btn-light">Done</button>
                    </div>
    
                    <div className="col-sm">
                        <button id = "button" type="button" className="btn btn-light">Delete</button>
                    </div>
                </div>


                <div class = "row" style={styles.list}>
                        <div className="col-sm" style={styles.task}>
                            Task 2
                    </div>

                    <div className="col-sm">
                        <button id="button" type="button" className="btn btn-light">Done</button>
                    </div>
                
                    <div className="col-sm">
                        <button id="button" type="button" className="btn btn-light">Delete</button>
                    </div>
                </div> 
            </div>
        );
    }

}

const styles = {
     
    task: {
            background: "pink",
            borderRadius: "30px",
            color: "#CE266C",
            fontWeight: "bold",
            fontSize: "25px"
        },
        
    list: { 
            margin: "50 0 50 0"
        } ,

     rowHeight: {
             margin: "100 0 100 0",
           }

    };


export default TaskList;  

