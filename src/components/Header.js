import React from 'react';
import '../index.css';

class Header extends React.Component {

    render(){
        return (
            <div className="row" style={styles.rowHeight} >
                 <h1 style={styles.header} className="col-lg">TO DO LIST</h1>;
            </div>
        )
    }

}

const styles = {
    header: {
        background: "#D37AB1",
        fontFamily: "Sarabun', sans-serif",
        fontSize: "100",
        textAlign: "center",
        borderRadius: "30px",
        padding: "40 0 40 0"
    },

    rowHeight: {
         margin: "100 0 100 0",
    }

    }




export default Header;  