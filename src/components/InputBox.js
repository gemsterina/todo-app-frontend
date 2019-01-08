import React from 'react';
import '../index.css';

class InputBox extends React.Component {

    render(){
        return  (
            <div className="row" style={styles.rowHeight}>
                <div className="col-lg">
                       <form style = {styles.formfield}>
                            THINGS TO DO: <input type="text" name="entry" id="formfield" />
                          <button type="button" id="button" className="btn btn-light">Add</button>
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
    rowHeight: {
            margin: "100 0 100 0",
       }
    }


export default InputBox;