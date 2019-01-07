import React from 'react';

class TotalCounter extends React.Component {

    render(){
        return (
            <div class = "row">
                <div class="col-lg">
     
                 TOTAL TASKS: 2
    
                </div>
            </div>);
    }

}

const styles = {
    header : {
        color: "pink",
        textDecoration: "underline",
    }

    col-lg : {
        backgroundColor:"#DF8293",
        padding:"20 0 20 0",
        borderRadius:"30px",
        fontSize:"30px",
        fontWeight:"bold",
    }
}

export default TotalCounter;  