export class Coordinate {
    constructor(private _xAxis, private _yAxis) {
    }

    xAxis() {
        return this._xAxis;
    }

    yAxis() {
        return this._yAxis;
    }

    toArray(): number[] {
        return [this._xAxis, this._yAxis]
    }

    nextY(): Coordinate {
        return new Coordinate(this.xAxis(), this.yAxis() + 1)
    }

    previousY(): Coordinate {
        return new Coordinate(this.xAxis(), this.yAxis() - 1)
    }
}
