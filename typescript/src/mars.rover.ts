export const MOVE = "M";
export const ROTATE_RIGHT = "R";
export const ROTATE_LEFT = "L";

const NORTH: string = 'N';
const EAST: string = 'E';
const SOUTH: string = 'S';
const WEST: string = "W";

export class MarsRover {
    private readonly plateauSize: number = 9;
    private positionY: number = 0;
    private positionX: number = 0;
    private direction: string = NORTH;

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
        return `${this.positionX},${this.positionY},${(this.direction)}`;
    }

    private move(): void {
        if (this.direction == NORTH) {
            this.positionY++
        } else if (this.direction == SOUTH) {
            this.positionY--
        } else if (this.direction == WEST) {
            this.positionX--
        } else if (this.direction == EAST) {
            this.positionX++
        }

        this.wrapAround()
        this.wrapAroundX()
    }

    private isRotatingToLeft(actualCommand: string): boolean {
        return actualCommand == ROTATE_LEFT;
    }

    private isRotatingToRight(actualCommand: string): boolean {
        return actualCommand == ROTATE_RIGHT;
    }

    private rotateRight() {
        switch (this.direction) {
            case NORTH:
                this.direction = EAST
                break;
            case EAST:
                this.direction = SOUTH
                break;
            case SOUTH:
                this.direction = WEST
                break;
            default:
                this.direction = NORTH
                break;
        }
    }

    private rotateLeft() {
        switch (this.direction) {
            case NORTH:
                this.direction = WEST
                break;
            case WEST:
                this.direction = SOUTH
                break;
            case SOUTH:
                this.direction = EAST
                break;
            default:
                this.direction = NORTH
                break;
        }
    }

    private wrapAround(): void {
        if (this.positionY < 0) {
            this.positionY = this.plateauSize
        }

        if (this.positionY > this.plateauSize) {
            this.positionY = 0;
        }
    }

    private wrapAroundX(): void {
        if (this.positionX < 0) {
            this.positionX = this.plateauSize
        }

        if (this.positionX > this.plateauSize) {
            this.positionX = 0;
        }
    }

    private isAMovementCommand(actualCommand: string): boolean {
        return actualCommand == MOVE;
    }
}
