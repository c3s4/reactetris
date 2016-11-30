import React, { Component } from 'react';
import update from 'immutability-helper';

import styles from './styles';

class Board extends Component {
    render() {
        const movingPiece = update(styles.piece, {top: {$set: 40 * this.props.time}});
        return (<div style={styles.container}><div style={movingPiece}/></div>);
    }
}

export default Board;
