import {North} from "./north";
import {East} from "./east";
import {South} from "./south";
import {West} from "./west";

export const MOVE: string = "M";
export const ROTATE_RIGHT: string = "R";
export const ROTATE_LEFT: string = "L";

export class MarsRover {
    private readonly PLATEAU_INITIAL_POSITION: number = 0;
    private readonly PLATEAU_SIZE: number = 9;

    private _positionX: number;
    private _positionY: number;
    private _direction: Direction;

    constructor(_positionX: number, _positionY: number, _direction: Direction) {
        this._direction = _direction;
        this._positionY = _positionY;
        this._positionX = _positionX;
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
        return `${this._positionX},${this._positionY},${(this._direction)}`;
    }

    private moveForward(): void {
        if (this.isFacingNorth()) {
            this._positionY++
        } else if (this.isFacingSouth()) {
            this._positionY--
        } else if (this.isFacingWest()) {
            this._positionX--
        } else if (this.isFacingEast()) {
            this._positionX++
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
        switch (true) {
            case this.isFacingNorth():
                this._direction = new West()
                break;
            case this.isFacingWest():
                this._direction = new South()
                break;
            case this.isFacingSouth():
                this._direction = new East()
                break;
            case this.isFacingEast():
                this._direction = new North()
                break;
        }
    }

    private wrapAroundYAxis(): void {
        this._positionY = this.wrapAroundPosition(this._positionY)
    }

    private wrapAroundXAxis(): void {
        this._positionX = this.wrapAroundPosition(this._positionX)
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
