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
} from '../services/actions.js';


const mapStateToProps = (state) => {
    return {
        number: state.number,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNum: () => dispatch(updateNum()),
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
                <BreakLength />
                <SessionLength />
              </div> 
              <Session />
              <Buttons updateNum={this.props.updateNum}/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);