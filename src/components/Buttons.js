import React from 'react';

const Buttons = (props) => {
    return(
        <div className="flex justify-center">
            <div className="pa1 pointer"
                onClick={props.play}
            >play
            </div>
            <div className="pa1" >pause</div>
            <div className="pa1">refresh</div>
        </div>
    );
}
export default Buttons;