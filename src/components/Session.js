import React from 'react';

const Session = ({sessionMinutes, sessionSeconds}) => {
    return(
        <div className="flex flex-column ba">
            <h2>session</h2>
            <div>{sessionMinutes}:{sessionSeconds}</div>
        </div>
    );
}
export default Session;