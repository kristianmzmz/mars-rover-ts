export class MarsRover {
    execute(command: string): string {
        let positionY = 0;

        command.split("").forEach((actualCommand) => {
            if(actualCommand == "M") positionY++
        })

        return `0,${positionY % 10},N`
    }
}
