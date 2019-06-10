import React from 'react';
import 'tachyons';
import BreakLength from '../components/BreakLength.js';
import SessionLength from '../components/SessionLength.js';
import Session from '../components/Session.js';
import Buttons from '../components/Buttons.js';
import { connect } from 'react-redux';
import { store } from '../index.js';
import {
    updateNum,
    updateIncreasedBreakLength,
    updateDecreasedBreakLength,
    updateIncreasedSessionLength,
} from '../services/actions.js';

const mapStateToProps = (state) => {
    return {
        number: state.number,
        breakLength: state.breakLength,
        sessionLength: state.sessionLength,
        sessionMinutes: state.sessionMinutes,
        sessionSeconds: state.sessionSeconds,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNum: () => dispatch(updateNum()),
        updateIncreasedBreakLength: () => dispatch(updateIncreasedBreakLength()),
        updateDecreasedBreakLength: () => dispatch(updateDecreasedBreakLength()),
        updateIncreasedSessionLength: () => dispatch(updateIncreasedSessionLength()),
    }
}

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
              <div className="flex justify-center">
                <BreakLength 
                updateIncreasedBreakLength={this.props.updateIncreasedBreakLength}
                breakLength={this.props.breakLength}
                updateDecreasedBreakLength={this.props.updateDecreasedBreakLength}
                />
                <SessionLength 
                updateIncreasedSessionLength={this.props.updateIncreasedSessionLength}
                sessionLength={this.props.sessionLength}
                />
              </div> 
              <Session 
                sessionMinutes={this.props.sessionMinutes}
                sessionSeconds={this.props.sessionSeconds}
              />
              <Buttons updateNum={this.props.updateNum}/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);