export class Coordinate {
    constructor(private _xAxis, private _yAxis) {
    }

    toArray(): number[]{
        return [this._xAxis,this._yAxis]
    }
}
