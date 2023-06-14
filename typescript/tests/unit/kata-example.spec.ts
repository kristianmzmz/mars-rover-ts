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
        let movementResult = rover.execute();
        // Then
        expect(movementResult).toBe("0,0,N")
    });
});
