import React from 'react';
import '../index.css';

class TotalCounter extends React.Component {

    render(){
        return (
            <div className= "row" style={styles.rowHeight}>
                <div style={styles.counter} className="col-lg">
     
                 TOTAL TASKS: 2
    
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

    rowHeight: {
        margin: "100 0 100 0",
   }
}

export default TotalCounter;  