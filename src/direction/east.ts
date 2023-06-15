import {North} from "./north";
import {South} from "./south";

export class East implements Direction {
    turnLeft(): Direction {
        return new North();
    }

    turnRight(): Direction {
        return new South();
    }

    toString(): string {
        return 'E'
    }
}
