import {East} from "./east";
import {West} from "./west";

export class South implements Direction {
    turnLeft(): Direction {
        return new East();
    }

    turnRight(): Direction {
        return new West();
    }

    toString(): string {
        return 'S'
    }
}
