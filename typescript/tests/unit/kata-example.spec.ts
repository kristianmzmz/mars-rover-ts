import {MarsRover, MOVE, ROTATE_RIGHT} from "../../src/mars.rover";

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

    it('should move and rotate to (0,1,E) when command is MR', () => {
        // Given
        let rover = new MarsRover();
        // When
        let movementResult = rover.execute("MR");
        // Then
        expect(movementResult).toBe("0,1,E")
    });

    it('should move and rotate to (1,1,E) when command is MRM', () => {
        // Given
        let rover = new MarsRover();
        // When
        let movementResult = rover.execute("MRM");
        // Then
        expect(movementResult).toBe("1,1,E")
    });

    it('should move, rotate and wrap around finishing at (0,1,E) when command is MRMMMMMMMMMM', () => {
        // Given
        let rover = new MarsRover();
        // When
        let movementResult = rover.execute("MRMMMMMMMMMM");
        // Then
        expect(movementResult).toBe("0,1,E")
    });
});
