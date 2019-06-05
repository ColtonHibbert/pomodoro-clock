import React from 'react';
import 'tachyons';

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
                <div>break length</div>
                <div>session length</div>
              </div>
              <div>session</div>
              <div>buttons</div>
            </div>
        );
    }
}

export default App;