import {North} from "./direction/north";
import {East} from "./direction/east";
import {South} from "./direction/south";
import {West} from "./direction/west";

export const MOVE: string = "M";
export const ROTATE_RIGHT: string = "R";
export const ROTATE_LEFT: string = "L";

export class MarsRover {
    private readonly PLATEAU_INITIAL_POSITION: number = 0;
    private readonly PLATEAU_SIZE: number = 9;

    private _coordinateX: number;
    private _coordinateY: number;
    private _direction: Direction;

    constructor(_coordinateY: number, _coordinateX: number, _direction: Direction) {
        this._direction = _direction;
        this._coordinateY = _coordinateY;
        this._coordinateX = _coordinateX;
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
        return `${this._coordinateX},${this._coordinateY},${(this._direction)}`;
    }

    private moveForward(): void {
        if (this.isFacingNorth()) {
            this._coordinateY++
        } else if (this.isFacingSouth()) {
            this._coordinateY--
        } else if (this.isFacingWest()) {
            this._coordinateX--
        } else if (this.isFacingEast()) {
            this._coordinateX++
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
        this._coordinateY = this.wrapAroundPosition(this._coordinateY)
    }

    private wrapAroundXAxis(): void {
        this._coordinateX = this.wrapAroundPosition(this._coordinateX)
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
