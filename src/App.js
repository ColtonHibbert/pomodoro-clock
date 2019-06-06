import React from 'react';
import 'tachyons';
import BreakLength from './components/BreakLength.js';
import SessionLength from './components/SessionLength.js';

class App extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return(
            <div
                className="min-vh-100 flex flex-column items-center bg-green"
            >
              <h1>Pomodoro Clock</h1>
              <div
                className="flex justify-center"
              >
                <BreakLength />
                <SessionLength />
              </div> 
              <div className="flex flex-column ba">
                <h2>session</h2>
                <div>minutes:seconds</div>
              </div>
              <div className="flex justify-center">
                <div className="pa1">play</div>
                <div className="pa1" >pause</div>
                <div className="pa1">refresh</div>
              </div>
            </div>
        );
    }
}

export default App;