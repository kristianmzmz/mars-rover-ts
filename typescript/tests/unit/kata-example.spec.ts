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
    ('should display position (%s) when command is %s', (expectedResult: string, inputCommand: string) => {
        // Given
        let rover = new MarsRover();
        // When
        let movementResult = rover.execute(inputCommand);
        // Then
        expect(movementResult).toBe(expectedResult)
    });

    it('should display the mars rover facing east when rotating to right from the starting position', () => {
        let rover = new MarsRover();
        let expectedResult = rover.execute(ROTATE_RIGHT);
        expect(expectedResult).toBe("0,0,E")
    });

    it('should display the mars rover facing South when rotating to right twice from the starting position', () => {
        let rover = new MarsRover();
        let expectedResult = rover.execute(ROTATE_RIGHT + ROTATE_RIGHT);
        expect(expectedResult).toBe("0,0,S")
    });
});
