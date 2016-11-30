import React, { Component } from 'react';

import styles from './styles';

class Board extends Component {
    render() {
        styles.piece.top = 40 * this.props.time;
        return (<div style={styles.container}><div style={styles.piece}/></div>);
    }
}

export default Board;
