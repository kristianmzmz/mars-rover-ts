import {West} from "./west";
import {East} from "./east";

export class North implements Direction {
    turnLeft(): Direction {
        return new West();
    }

    turnRight(): Direction {
        return new East();
    }

    toString(): string {
        return 'N'
    }
}
