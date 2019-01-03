import React from 'react';

class InputBox extends React.Component {

    render(){
        return  (
            <div className="row">
                <div className="col-lg">
                       <form>
                            THINGS TO DO: <input type="text" name="entry" id="formfield" />
                          <button type="button" id="button" className="btn btn-light">Add</button>
                      </form>
                </div> 
            </div>
        );

    }
}


export default InputBox;