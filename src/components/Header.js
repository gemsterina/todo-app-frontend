import React from 'react';
import '../index.css';

class Header extends React.Component {

    render(){
        return (
            <div className="row" style={styles.taskRow} >
                 <h1 style={styles.header} className="col-lg">TO DO LIST</h1>;
            </div>
        )
    }

}

const styles = {
    header: {
        background: "#D37AB1",
        fontFamily: "Sarabun', sans-serif",
        fontSize: "150",
        textAlign: "center",
        borderRadius: "30px"
    },

    taskRow: {
        paddingTop: "50px",
        paddingBottom: "25px"
    },
    }




export default Header;  