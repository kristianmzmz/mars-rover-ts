export const MOVE: string = "M";
export const ROTATE_RIGHT: string = "R";
export const ROTATE_LEFT: string = "L";

const NORTH: string = 'N';
const EAST: string = 'E';
const SOUTH: string = 'S';
const WEST: string = "W";

const PLATEAU_SIZE: number = 9;
const INITIAL_POSITION: number = 0;

export class MarsRover {

    constructor(private _positionY: number = INITIAL_POSITION,
                private _positionX: number = INITIAL_POSITION,
                private _direction: string = NORTH) {

    }


    execute(commands: string): string {
        commands.split("").forEach((actualCommand) => {
            if (this.isAMovementCommand(actualCommand)) {
                this.move();
            }
            if (this.isRotatingToRight(actualCommand)) {
                this.rotateRight();
            }
            if (this.isRotatingToLeft(actualCommand)) {
                this.rotateLeft();
            }
        })

        return this.buildResult()
    }

    private buildResult(): string {
        return `${this._positionX},${this._positionY},${(this._direction)}`;
    }

    private move(): void {
        if (this._direction == NORTH) {
            this._positionY++
        } else if (this._direction == SOUTH) {
            this._positionY--
        } else if (this._direction == WEST) {
            this._positionX--
        } else if (this._direction == EAST) {
            this._positionX++
        }

        this.wrapAroundYAxis()
        this.wrapAroundXAxis()
    }

    private isRotatingToLeft(actualCommand: string): boolean {
        return actualCommand == ROTATE_LEFT;
    }

    private isRotatingToRight(actualCommand: string): boolean {
        return actualCommand == ROTATE_RIGHT;
    }

    private rotateRight(): void {
        switch (this._direction) {
            case NORTH:
                this._direction = EAST
                break;
            case EAST:
                this._direction = SOUTH
                break;
            case SOUTH:
                this._direction = WEST
                break;
            default:
                this._direction = NORTH
                break;
        }
    }

    private rotateLeft(): void {
        switch (this._direction) {
            case NORTH:
                this._direction = WEST
                break;
            case WEST:
                this._direction = SOUTH
                break;
            case SOUTH:
                this._direction = EAST
                break;
            default:
                this._direction = NORTH
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
        if (position < INITIAL_POSITION) {
            return PLATEAU_SIZE
        }
        if (position > PLATEAU_SIZE) {
            return INITIAL_POSITION;
        }

        return position;
    }

    private isAMovementCommand(command: string): boolean {
        return command == MOVE;
    }
}
