export const MOVE = "M";
export const ROTATE_RIGHT = "R";

export class MarsRover {
    private readonly plateauSize = 10;

    execute(command: string): string {
        let positionY = 0;
        let direction = `N`;

        command.split("").forEach((actualCommand) => {
            if (this.isAMovementCommand(actualCommand)) positionY++
            if (command == ROTATE_RIGHT) direction = "E"
        })

        return `0,${(this.wrapAround(positionY))},${direction}`
    }

    private wrapAround(positionY: number): number {
        return positionY % this.plateauSize;
    }

    private isAMovementCommand(actualCommand: string): boolean {
        return actualCommand == MOVE;
    }
}
