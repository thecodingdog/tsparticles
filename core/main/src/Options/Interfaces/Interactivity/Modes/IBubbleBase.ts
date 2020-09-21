import type { SingleOrMultiple } from "../../../../Types/SingleOrMultiple";
import type { IColor } from "../../../../Core/Interfaces/IColor";

/**
 * @category Options
 */
export interface IBubbleBase {
    distance: number;
    duration: number;
    opacity?: number;
    size?: number;
    color?: SingleOrMultiple<IColor | string>;
}
