import type { IRotateAnimation } from "./IRotateAnimation";
import type { RotateDirection, RotateDirectionAlt } from "../../../../Enums";

/**
 * [[include:Options/Particles/Rotate.md]]
 * @category Options
 */
export interface IRotate {
    animation: IRotateAnimation;
    direction: RotateDirection | keyof typeof RotateDirection | RotateDirectionAlt;
    path: boolean;
    random: boolean;
    value: number;
}
