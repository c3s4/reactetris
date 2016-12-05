
class Piece {
    constructor() {
        this._piece = [[1, 1, 0], [0, 1, 1]];
        this._x = 4;
        this.y = 0;
    }

    rotate() {
        const newWidth = this._piece.length;
        const newHeight = this._piece[0].length;
        const newPiece = [];

        for (let i = 0; i < newHeight; i++) {
            const newRow = [];
            for (let j = 0; j < newWidth; j++) {
                newRow.push(this._piece[newWidth - 1 - j][i]);
            }
            newPiece.push(newRow);
        }

        this._piece = newPiece;
    }

    get x() {
        return this._x;
    }

    set x(x) {
        this._x = x;
    }

    get y() {
        return this._y;
    }

    set y(y) {
        this._y = y;
    }

    get height() {
        return this._piece.length;
    }

    get width() {
        return this._piece[0].length;
    }

    print() {
        this._piece.forEach((row) => {
            let currentString = '';
            row.forEach((element) => {
                currentString += ' ' + element;
            });
            console.log(currentString);
        });
        console.log('');
    }

    get shape() {
        return this._piece;
    }
}

export default Piece;
