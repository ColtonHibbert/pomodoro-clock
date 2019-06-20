import React from 'react';

const Session = ({minutes, seconds}) => {
    return(
        <div className="flex flex-column ba">
            <h2>session</h2>
            <div>{minutes}:{seconds}</div>
        </div>
    );
}
export default Session;