import React from 'react';

const SessionLength = (props) => {
    return(
        <div  
            className="flex flex-column pl3"
        >
            <div id="session-label">Session Length</div>
            <div className="flex justify-center"> 
                <div 
                    id="session-increment"
                    className="pa1"
                    onClick={props.updateIncreasedSessionLength}
                >up</div>
                <div className="pa1" id="session-length">{props.sessionLength}</div>
                <div 
                    id="session-decrement"
                    className="pa1"
                    onClick={props.updateDecreasedSessionLength}
                >down</div>
            </div>
        </div>  
     );
}
export default SessionLength;