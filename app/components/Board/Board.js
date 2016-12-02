import React, { Component } from 'react';
import update from 'immutability-helper';

import styles from './styles';

import Tile from '../Tile';

class Board extends Component {

    static get PROPERTIES() {
        return {
            WIDTH: 10,
            HEIGHT: 18,
            TILE_WIDTH: 40,
            TILE_HEIGHT: 40
        };
    }

    constructor(props) {
        super(props);
        this._x = 0;
        this._y = 0;
        this.state = {};
        this.state.board = new Array(Board.PROPERTIES.HEIGHT);
        this.state.board.fill(0);
        this.state.board.map(() => {
            const inner = new Array(Board.PROPERTIES.WIDTH);
            inner.fill(0);
            return inner;
        });

        styles.container = update(styles.container, {
            width: {$set: Board.PROPERTIES.WIDTH * Board.PROPERTIES.TILE_WIDTH},
            height: {$set: Board.PROPERTIES.HEIGHT * Board.PROPERTIES.TILE_HEIGHT}
        });

    }

    render() {

        if (this.props.pressedKey === 'L') {
            this._x = (this._x === 0) ? 0 : this._x - 1;
        } else if (this.props.pressedKey === 'R') {
            this._x = (this._x === Board.PROPERTIES.WIDTH - 1) ? Board.PROPERTIES.WIDTH - 1 : this._x + 1;
        }
        this._y = this.props.time;

        return (<div style={styles.container}><Tile color="grey" x={this._x} y={this._y}/></div>);
    }
}

export default Board;
