import {MarsRover, MOVE, ROTATE_LEFT, ROTATE_RIGHT} from "../../src/mars.rover";

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
        ["0,1,N", MOVE],
        ["0,2,N", MOVE + MOVE],
        ["0,3,N", MOVE + MOVE + MOVE],
        ["0,0,N", MOVE + MOVE + MOVE + MOVE + MOVE + MOVE + MOVE + MOVE + MOVE + MOVE],
    ])
    ('should move the position to (%s) when command is %s', (expectedResult: string, inputCommand: string) => {
        // Given
        let rover = new MarsRover();
        // When
        let movementResult = rover.execute(inputCommand);
        // Then
        expect(movementResult).toBe(expectedResult)
    });

    it.each([
        ["0,0,E", ROTATE_RIGHT],
        ["0,0,S", ROTATE_RIGHT + ROTATE_RIGHT],
        ["0,0,W", ROTATE_RIGHT + ROTATE_RIGHT + ROTATE_RIGHT],
        ["0,0,N", ROTATE_RIGHT + ROTATE_RIGHT + ROTATE_RIGHT + ROTATE_RIGHT],
    ])
    ('should rotate the position to the right and display (%s) when command is %s', (expectedResult: string, inputCommand: string) => {
        // Given
        let rover = new MarsRover();
        // When
        let movementResult = rover.execute(inputCommand);
        // Then
        expect(movementResult).toBe(expectedResult)
    });

    it.each([
        ["0,0,W", ROTATE_LEFT],
        ["0,0,S", ROTATE_LEFT + ROTATE_LEFT],
        ["0,0,E", ROTATE_LEFT + ROTATE_LEFT + ROTATE_LEFT],
        ["0,0,N", ROTATE_LEFT + ROTATE_LEFT + ROTATE_LEFT + ROTATE_LEFT],
    ])
    ('should rotate the position to the left and display (%s) when command is %s', (expectedResult: string, inputCommand: string) => {
        // Given
        let rover = new MarsRover();
        // When
        let movementResult = rover.execute(inputCommand);
        // Then
        expect(movementResult).toBe(expectedResult)
    });

    it.each([
        ["0,1,E", MOVE + ROTATE_RIGHT],
        ["1,1,E", MOVE + ROTATE_RIGHT + MOVE],
        ["0,1,E", MOVE + ROTATE_RIGHT + MOVE + MOVE + MOVE + MOVE + MOVE + MOVE + MOVE + MOVE + MOVE + MOVE],
        ["0,0,S", MOVE + ROTATE_RIGHT + ROTATE_RIGHT + MOVE],
        ["0,9,S", MOVE + ROTATE_RIGHT + ROTATE_RIGHT + MOVE + MOVE],
        ["9,1,W", MOVE + ROTATE_RIGHT + ROTATE_RIGHT + ROTATE_RIGHT + MOVE],
    ])
    ('should move and rotate to the right the position displaying (%s) when command is %s', (expectedResult: string, inputCommand: string) => {
        // Given
        let rover = new MarsRover();
        // When
        let movementResult = rover.execute(inputCommand);
        // Then
        expect(movementResult).toBe(expectedResult)
    });

    it.each([
        ["0,1,W", MOVE + ROTATE_LEFT],
        ["9,1,W", MOVE + ROTATE_LEFT + MOVE],
        ["8,1,W", MOVE + ROTATE_LEFT + MOVE + MOVE],
        ["0,0,S", MOVE + ROTATE_LEFT + ROTATE_LEFT + MOVE],
        ["0,9,S", MOVE + ROTATE_LEFT + ROTATE_LEFT + MOVE + MOVE],
        ["1,1,E", MOVE + ROTATE_LEFT + ROTATE_LEFT + ROTATE_LEFT + MOVE],
    ])
    ('should move and rotate to the left the position displaying (%s) when command is %s', (expectedResult: string, inputCommand: string) => {
        // Given
        let rover = new MarsRover();
        // When
        let movementResult = rover.execute(inputCommand);
        // Then
        expect(movementResult).toBe(expectedResult)
    });
});
