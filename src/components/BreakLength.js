import React from 'react';

const BreakLength = (props) => {
    return(
        <div  
        className="flex flex-column pr3"
      >
        <div id="break-label">Break Length</div>
        <div className="flex justify-center"> 
          <div  
            id="break-increment"
            className="pa1"
            onClick={props.updateIncreasedBreakLength}
          >up</div>
          <div className="pa1" id="break-length">{props.breakLength}</div>
          <div 
            id="break-decrement"
            className="pa1"
            onClick={props.updateDecreasedBreakLength}
          >down</div>
        </div>
      </div>
    );
}

export default BreakLength;
