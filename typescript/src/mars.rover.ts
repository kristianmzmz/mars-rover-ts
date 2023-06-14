export const MOVE = "M";
export const ROTATE_RIGHT = "R";

const NORTH: string = 'N';
const EAST: string = 'E';
const SOUTH: string = 'S';
const WEST: string = "W";

export class MarsRover {
    private readonly plateauSize: number = 10;
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
        return `${this.positionX},${this.positionY},${(this.direction)}`;
    }

    private move(): void {
        if (this.direction == NORTH) {
            this.positionY++
        } else if (this.direction == SOUTH) {
            this.positionY--
        } else if (this.direction == WEST) {
            this.positionX--
        } else {
            this.positionX++
        }

        this.wrapAround()
        this.wrapAroundX()
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

    private wrapAround(): void {
        this.positionY = this.positionY == this.plateauSize ? 0 : this.positionY;
    }

    private wrapAroundX(): void {
        if(this.positionX < 0 ){
            this.positionX = this.plateauSize - 1
        }

        if (this.positionX == this.plateauSize) {
            this.positionX = 0;
        }
    }

    private isAMovementCommand(actualCommand: string): boolean {
        return actualCommand == MOVE;
    }
}
