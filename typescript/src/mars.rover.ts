export const MOVE = "M";
export const ROTATE_RIGHT = "R";

export class MarsRover {
    private readonly plateauSize = 10;
    private positionY = 0;

    execute(command: string): string {
        let direction = `N`;

        command.split("").forEach((actualCommand) => {
            if (this.isAMovementCommand(actualCommand)) this.positionY++
            if (actualCommand == ROTATE_RIGHT) {
                if(direction === 'N') {
                    direction = 'E'
                } else if(direction == 'E'){
                    direction = 'S'
                }
            }
        })

        return `0,${(this.wrapAround())},${direction}`
    }

    private wrapAround(): number {
        return this.positionY % this.plateauSize;
    }

    private isAMovementCommand(actualCommand: string): boolean {
        return actualCommand == MOVE;
    }
}
