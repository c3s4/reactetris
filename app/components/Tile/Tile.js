import React, { Component } from 'react';
import update from 'immutability-helper';

import styles from './styles';

class Tile extends Component {

    constructor(props) {
        super(props);
        this._movingTileStyle = update(styles, {backgroundColor: {$set: props.color}});
        this._width = this._movingTileStyle.width;
        this._height = this._movingTileStyle.height;
    }

    calculateCoords() {
        this._leftPos = this.props.x * this._width;
        this._topPos = this.props.y * this._height;
    }

    render() {
        this.calculateCoords();
        this._movingTileStyle = update(styles, {
            left: {$set: this._leftPos},
            top: {$set: this._topPos},
            backgroundColor: {$set: this.props.color}
        });
        return (<div style={this._movingTileStyle}/>);
    }
}

export default Tile;