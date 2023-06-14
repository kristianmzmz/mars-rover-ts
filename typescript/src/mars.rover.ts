export const MOVE = "M";
export const ROTATE_RIGHT = "R";

const NORTH = 'N';
const EAST = 'E';
const SOUTH = 'S';
const WEST = "W";

export class MarsRover {
    private readonly plateauSize = 10;
    private positionY: number = 0;
    private positionX: number = 0;
    private direction: string = NORTH;

    execute(command: string): string {
        command.split("").forEach((actualCommand) => {
            if (this.isAMovementCommand(actualCommand)) this.move();
            if (this.isARotationMovement(actualCommand)) {
                this.rotate();
            }
        })

        return `${this.positionX},${this.wrapAround()},${(this.direction)}`
    }

    private move(): void {
        if (this.direction == 'N') {
            this.positionY++
        } else {
            this.positionX++
        }
    }

    private isARotationMovement(actualCommand: string) {
        return actualCommand == ROTATE_RIGHT;
    }

    private rotate(): void {
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

    private wrapAround(): number {
        return this.positionY % this.plateauSize;
    }

    private isAMovementCommand(actualCommand: string): boolean {
        return actualCommand == MOVE;
    }
}
