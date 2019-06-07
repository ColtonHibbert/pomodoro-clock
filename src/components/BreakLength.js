import React from 'react';

const BreakLength = (props) => {
    return(
        <div  
        className="flex flex-column pr3"
      >
        <div>break length</div>
        <div className="flex justify-center"> 
          <div className="pa1"
            onClick={props.updateIncreasedBreakLength}
          >up</div>
          <div className="pa1">{props.breakLength}</div>
          <div className="pa1">down</div>
        </div>
      </div>
    );
}

export default BreakLength;
