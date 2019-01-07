import React from 'react';

class InputBox extends React.Component {

    render(){
        return  (
            <div className="row">
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
            background: "pink",
            color: "#DA248E",
            fontWeight: "bold",
            fontSize: "30px"
        },
    button: {
        buttonType: "btn btn-light"
        },
    }



export default InputBox;