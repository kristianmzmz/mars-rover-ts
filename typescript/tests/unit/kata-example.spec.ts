import {MarsRover} from "../../src/mars.rover";

describe('Mars Rover', () => {
    it('should create the mars rover', () => {
        let rover = new MarsRover();
        expect(rover).toBeInstanceOf(MarsRover);
    });

    it('should display the starting position (0,0,N) when command is empty', () => {
        // Given
        let rover = new MarsRover();
        // When
        let movementResult = rover.execute("");
        // Then
        expect(movementResult).toBe("0,0,N")
    });

    it.each([
        ["0,1,N", "M"],
        ["0,2,N", "MM"],
        ["0,3,N", "MMM"],
        ["0,0,N", "MMMMMMMMMM"],
    ])
    ('should display position (%s) when command is %s', (expectedResult: string, inputCommand: string) => {
        // Given
        let rover = new MarsRover();
        // When
        let movementResult = rover.execute(inputCommand);
        // Then
        expect(movementResult).toBe(expectedResult)
    });
});
