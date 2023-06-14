export const MOVE = "M";
export const ROTATE_RIGHT = "R";

const NORTH = 'N';
const EAST = 'E';
const SOUTH = 'S';
const WEST = "W";

export class MarsRover {
    private readonly plateauSize = 10;
    private positionY = 0;

    private direction: string = NORTH;

    execute(command: string): string {
        command.split("").forEach((actualCommand) => {
            if (this.isAMovementCommand(actualCommand)) this.positionY++
            if (actualCommand == ROTATE_RIGHT) {
                this.rotate();
            }
        })

        return `0,${(this.wrapAround())},${(this.direction)}`
    }

    private rotate(): void {
        if (this.direction === NORTH) {
            this.direction = EAST
        } else if (this.direction == EAST) {
            this.direction = SOUTH
        } else if (this.direction == SOUTH) {
            this.direction = WEST
        }
    }

    private wrapAround(): number {
        return this.positionY % this.plateauSize;
    }

    private isAMovementCommand(actualCommand: string): boolean {
        return actualCommand == MOVE;
    }
}
