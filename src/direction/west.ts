import {North} from "./north";
import {South} from "./south";

export class West implements Direction {
    turnLeft(): Direction {
        return new South();
    }

    turnRight(): Direction {
        return new North();
    }

    toString(): string {
        return 'W'
    }
}
