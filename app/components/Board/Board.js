import React, { Component } from 'react';
import update from 'immutability-helper';

import styles from './styles';

class Board extends Component {

    constructor(props) {
        super(props);
        this.leftPos = styles.piece.left
    }

    render() {
        if (this.props.pressedKey === 'L') {
            this.leftPos = this.leftPos - 40;
        } else if (this.props.pressedKey === 'R') {
            this.leftPos = this.leftPos + 40;
        }

        console.log(this.leftPos);
        const movingPiece = update(styles.piece, {
            top: {$set: 40 * this.props.time},
            left: {$set: this.leftPos}
        });

        return (<div style={styles.container}><div style={movingPiece}/></div>);
    }
}

export default Board;
