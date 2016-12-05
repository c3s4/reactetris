import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import Board from './app/components/Board';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.time = props.time;
        this.state.request = 0;
        this.state.prevTimestamp = 0;
        this.state.prevMoveTimestamp = 0;
        this._requestAnimFrame = null;
        this.pressedKey = null;
    }

    componentWillMount() {
        document.addEventListener('keydown', this.keydown.bind(this), false);
        document.addEventListener('keyup', this.keyup.bind(this), false);
    }

    tick(timestamp) {
        if ((timestamp - this.state.prevTimestamp) > 1000 ) {
            this.setState({
                time: this.state.time + 1,
                prevTimestamp: timestamp,
                pressedKey: this.pressedKey
            });
        } else if ((this.pressedKey) && ((timestamp - this.state.prevMoveTimestamp) > 60)) {
            this.setState({prevMoveTimestamp: timestamp, time: this.state.time, pressedKey: this.pressedKey});
        }

        this._requestAnimFrame = requestAnimationFrame(this.tick.bind(this));
    }

    stop() {
        if (this._requestAnimFrame) {
            cancelAnimationFrame(this._requestAnimFrame);
        }
    }

    keydown(evt) {
        console.log(evt.key);
        switch (evt.key) {
            case 'ArrowDown':
                this.pressedKey = 'D';
            break;
            case 'ArrowLeft':
                this.pressedKey = 'L';
            break;
            case 'ArrowRight':
                this.pressedKey = 'R';
            break;
            case 'Enter':
                this.pressedKey = 'E';
                break;
            default:
            return; // Quit when this doesn't handle the key event.
        }
    }

    keyup(evt) {
        this.pressedKey = null;
    }

    render() {
        return (
            <div>
                <button onClick={this.tick.bind(this)}>START</button>
                <button onClick={this.stop.bind(this)}>STOP</button>
                <Board text={this.state.time} time={this.state.time} pressedKey={this.state.pressedKey}/>
            </div>
            );
    }
}

App.propTypes = {
    time: PropTypes.number
};

const element = <App time={0} text="0"/>;

ReactDOM.render(
  element,
  document.getElementById('app')
);


// function animate() {
//     element.tick();
//     requestAnimationFrame(animate);
// }


// animate();
