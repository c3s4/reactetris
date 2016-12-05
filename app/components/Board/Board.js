import React, { Component } from 'react';
import update from 'immutability-helper';

import styles from './styles';

import Tile from '../Tile';
import Piece from '../Piece';

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
        this.state.board = this.state.board.map(() => {
            const inner = new Array(Board.PROPERTIES.WIDTH);
            inner.fill({val: 0, temporary: true});
            return inner;
        });

        this.currentPiece = new Piece();

        styles.container = update(styles.container, {
            width: {$set: Board.PROPERTIES.WIDTH * Board.PROPERTIES.TILE_WIDTH},
            height: {$set: Board.PROPERTIES.HEIGHT * Board.PROPERTIES.TILE_HEIGHT}
        });

    }

    _clearTemporaryTiles() {
        this.state.board = this.state.board.map((row) => {
            return row.map((singleTile) => {
                if (singleTile.temporary === true) {
                    return {val: 0, temporary: true};
                }
            });
        });
    }

    render() {

        console.log(this.currentPiece.shape.length);

        this._clearTemporaryTiles();
        if (this.props.pressedKey === 'E') {
            this.currentPiece.rotate();
        } else if (this.props.pressedKey === 'L') {
            this.currentPiece.x = (this.currentPiece.x === 0) ? 0 : this.currentPiece.x - 1;
        } else if (this.props.pressedKey === 'R') {
            this.currentPiece.x = (this.currentPiece.x === Board.PROPERTIES.WIDTH - 1) ? Board.PROPERTIES.WIDTH - 1 : this.currentPiece.x + 1;
        }

        for (let i = 0; i < this.currentPiece.shape.length; i++) {
            for (let j = 0; j < this.currentPiece.shape[i].length; j++) {
                this.state.board[i + this.currentPiece.y][j + this.currentPiece.x] = {val: this.currentPiece.shape[i][j], temporary: true};
            }
        }

        const tiles = this.state.board.reduce((accumulator, currentRow, currentRowIndex) => {
            return accumulator.concat(
                currentRow.map((singleTile, currentColIndex) => {
                    if (singleTile.val !== 0) {
                        return (<Tile key={currentRowIndex + '-' + currentColIndex} color="yellow" x={currentColIndex} y={currentRowIndex}/>);
                    } else {
                        return '';
                    }
                })
            );
        }, []);

        
        this.currentPiece.y = this.props.time;

        return (<div style={styles.container}>{tiles}</div>);
    }
}

export default Board;
