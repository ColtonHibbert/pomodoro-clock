import React from 'react';

const SessionLength = (props) => {
    return(
        <div  
            className="flex flex-column pl3"
        >
            <div>session length</div>
            <div className="flex justify-center"> 
                <div 
                    className="pa1"
                    onClick={props.updateIncreasedSessionLength}
                >up</div>
                <div className="pa1">{props.sessionLength}</div>
                <div className="pa1">down</div>
            </div>
        </div>  
     );
}
export default SessionLength;