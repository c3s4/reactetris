import React, { Component } from 'react';
import update from 'immutability-helper';

import styles from './styles';

import Tile from '../Tile';

class Board extends Component {

    constructor(props) {
        super(props);
        this._x = 0;
        this._y = 0;
    }

    render() {
        if (this.props.pressedKey === 'L') {
            this._x -= 1;
        } else if (this.props.pressedKey === 'R') {
            this._x += 1;
        }
        this._y = this.props.time;

        return (<div style={styles.container}><Tile color="grey" x={this._x} y={this._y}/></div>);
    }
}

export default Board;
