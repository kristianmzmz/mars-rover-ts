import {North} from "./direction/north";
import {East} from "./direction/east";
import {South} from "./direction/south";
import {West} from "./direction/west";
import {Coordinate} from "./coordinate";

export const MOVE: string = "M";
export const ROTATE_RIGHT: string = "R";
export const ROTATE_LEFT: string = "L";

export class MarsRover {
    private readonly PLATEAU_INITIAL_POSITION: number = 0;
    private readonly PLATEAU_SIZE: number = 9;

    private _coordinate: number[];
    private _direction: Direction;

    constructor(_coordinateX: number, _coordinateY: number, _direction: Direction) {
        this._direction = _direction;
        this._coordinate = new Coordinate(_coordinateX,_coordinateY).toArray();
    }

    execute(commands: string): string {
        commands.split("").forEach((actualCommand) => {
            this.executeCommand(actualCommand);
        })

        return this.buildResult()
    }

    private executeCommand(actualCommand: string) {
        if (this.isAMovementCommand(actualCommand)) {
            this.moveForward();
        }
        if (this.isRotatingToRight(actualCommand)) {
            this.rotateRight();
        }
        if (this.isRotatingToLeft(actualCommand)) {
            this.rotateLeft();
        }
    }

    private buildResult(): string {
        return `${this._coordinate[0]},${this._coordinate[1]},${(this._direction)}`;
    }

    private moveForward(): void {
        if (this.isFacingNorth()) {
            this._coordinate[1]++
        } else if (this.isFacingSouth()) {
            this._coordinate[1]--
        } else if (this.isFacingWest()) {
            this._coordinate[0]--
        } else if (this.isFacingEast()) {
            this._coordinate[0]++
        }

        this.wrapAroundYAxis()
        this.wrapAroundXAxis()
    }

    private isFacingEast() {
        return this._direction instanceof East;
    }

    private isFacingWest() {
        return this._direction instanceof West;
    }

    private isFacingNorth() {
        return this._direction instanceof North;
    }

    private isFacingSouth() {
        return this._direction instanceof South;
    }

    private isRotatingToLeft(actualCommand: string): boolean {
        return actualCommand == ROTATE_LEFT;
    }

    private isRotatingToRight(actualCommand: string): boolean {
        return actualCommand == ROTATE_RIGHT;
    }

    private rotateRight(): void {
        this._direction = this._direction.turnRight()
    }

    private rotateLeft(): void {
        this._direction = this._direction.turnLeft()
    }

    private wrapAroundYAxis(): void {
        this._coordinate[1] = this.wrapAroundPosition(this._coordinate[1])
    }

    private wrapAroundXAxis(): void {
        this._coordinate[0] = this.wrapAroundPosition(this._coordinate[0])
    }

    private wrapAroundPosition(position: number) {
        if (position < this.PLATEAU_INITIAL_POSITION) {
            return this.PLATEAU_SIZE
        }
        if (position > this.PLATEAU_SIZE) {
            return this.PLATEAU_INITIAL_POSITION;
        }

        return position;
    }

    private isAMovementCommand(command: string): boolean {
        return command == MOVE;
    }
}
