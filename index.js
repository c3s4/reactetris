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
        this._requestAnimFrame = null;
    }

    tick(timestamp) {
        if ((timestamp - this.state.prevTimestamp) > 1000 ) {
            this.setState({
                time: this.state.time + 1,
                prevTimestamp: timestamp
            });
        }

        this._requestAnimFrame = requestAnimationFrame(this.tick.bind(this));        
    }

    stop() {
        if (this._requestAnimFrame) {
            cancelAnimationFrame(this._requestAnimFrame);
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.tick.bind(this)}>START</button>
                <button onClick={this.stop.bind(this)}>STOP</button>
                <Board text={this.state.time} time={this.state.time}/>
            </div>
            );
    }
}

App.propTypes = {
        time: PropTypes.number
    }

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
