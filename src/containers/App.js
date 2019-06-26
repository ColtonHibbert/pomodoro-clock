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
    updateDecreasedSessionLength,
    countDown,
    togglePlay,
    refresh,
} from '../services/actions.js';

const mapStateToProps = (state) => {
    return {
        number: state.number,
        breakLength: state.breakLength,
        sessionLength: state.sessionLength,
        minutes: state.minutes,
        seconds: state.seconds,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNum: () => dispatch(updateNum()),
        updateIncreasedBreakLength: () => dispatch(updateIncreasedBreakLength()),
        updateDecreasedBreakLength: () => dispatch(updateDecreasedBreakLength()),
        updateIncreasedSessionLength: () => dispatch(updateIncreasedSessionLength()),
        updateDecreasedSessionLength: () => dispatch(updateDecreasedSessionLength()),
        play: () => {
            dispatch(togglePlay());
            dispatch(countDown());
        },
        refresh: () => dispatch(refresh())
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div
                className="min-vh-100 flex flex-column items-center bg-light-green"
            >
              <h1 className="pt4">Pomodoro Clock</h1>
              <div className="flex justify-center">
                <BreakLength 
                updateIncreasedBreakLength={this.props.updateIncreasedBreakLength}
                breakLength={this.props.breakLength}
                updateDecreasedBreakLength={this.props.updateDecreasedBreakLength}
                />
                <SessionLength 
                updateIncreasedSessionLength={this.props.updateIncreasedSessionLength}
                sessionLength={this.props.sessionLength}
                updateDecreasedSessionLength={this.props.updateDecreasedSessionLength}
                />
              </div> 
              <Session 
                minutes={this.props.minutes}
                seconds={this.props.seconds}
              />
              <Buttons 
                updateNum={this.props.updateNum}
                play={this.props.play}
                refresh={this.props.refresh}
              />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);