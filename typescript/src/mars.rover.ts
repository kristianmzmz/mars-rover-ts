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

    execute(commands: string): string {
        commands.split("").forEach((actualCommand) => {
            if (this.isAMovementCommand(actualCommand)) {
                this.move();
            }
            if (this.isARotationCommand(actualCommand)) {
                this.rotate();
            }
        })

        return this.buildResult()
    }

    private buildResult(): string {
        return `${this.wrapAroundX()},${this.wrapAround()},${(this.direction)}`;
    }

    private move(): void {
        if (this.direction == NORTH) {
            this.positionY++
        } else if (this.direction == SOUTH) {
            this.positionY--
        } else {
            this.positionX++
        }
    }

    private isARotationCommand(actualCommand: string) {
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

    private wrapAroundX(): number {
        return this.positionX % this.plateauSize;
    }

    private isAMovementCommand(actualCommand: string): boolean {
        return actualCommand == MOVE;
    }
}
