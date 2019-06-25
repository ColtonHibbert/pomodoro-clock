import React from 'react';

const Buttons = (props) => {
    return(
        <div className="flex justify-center">
            <div 
                id="start_stop"
                className="pa1 pointer"
                onClick={props.play}
            >play/pause
            </div>
            <div 
                id="reset"
                className="pa1"
                onClick={props.refresh}
            >refresh</div>
        </div>
    );
}
export default Buttons;