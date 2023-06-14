const MOVE = "M";

export class MarsRover {
    execute(command: string): string {
        let positionY = 0;

        command.split("").forEach((actualCommand) => {
            if(this.isAMovementCommand(actualCommand)) positionY++
        })

        return `0,${positionY % 10},N`
    }

    private isAMovementCommand(actualCommand: string) {
        return actualCommand == MOVE;
    }
}
