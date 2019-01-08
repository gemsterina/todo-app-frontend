import React from 'react';
import '../index.css';

class TaskList extends React.Component {

    render(){
        return (
            <div>
                <div className="row" style={styles}>
                    <div className="col-sm" id="task">
                        Task 1
                    </div>
                    <div className="col-sm">
                        <button type="button" className="btn btn-light" style={styles.buttonLook}>Done</button>
                    </div>
    
                    <div className="col-sm">
                        <button type="button" className="btn btn-light"style={styles.buttonLook}>Delete</button>
                    </div>
                </div>


                <div className="row" style={styles.list}>
                        <div className="col-sm" id="task">
                            Task 2
                    </div>

                    <div className="col-sm">
                        <button  type="button" className="btn btn-light" style={styles.buttonLook}>Done</button>
                    </div>
                
                    <div className="col-sm">
                        <button type="button" className="btn btn-light" style={styles.buttonLook}>Delete</button>
                    </div>
                </div> 
            </div>
        );
    }

}

const styles = {
     

        
    list: { 
            margin: "50 0 50 0"
        } ,

     rowHeight: {
             margin: "100 0 100 0",
           },

    buttonLook: {
            
            backgroundColor: "#F7CED6",
            color: "white",
            fontWeight: "bold"
            }

    };


export default TaskList;  

