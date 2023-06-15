import {East} from "./east";
import {West} from "./west";

export class South implements Direction {
    turnLeft(): Direction {
        return new West();
    }

    turnRight(): Direction {
        return new East();
    }

    toString(): string {
        return 'S'
    }
}
