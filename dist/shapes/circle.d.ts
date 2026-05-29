import { Shape, type CircleJSON } from "../types/shape";
/**
 * A circle defined by its {@link Circle.radius | radius}.
 */
export declare class Circle extends Shape {
    readonly kind = "circle";
    private _radius;
    /**
     * @param radius - Circle radius. Must be greater than 0. Defaults to `1` (used internally by {@link Shape.clone | clone}).
     */
    constructor(radius?: number);
    /** Circle radius. */
    get radius(): number;
    /**
     * @param value - New radius. Must be greater than 0.
     */
    set radius(value: number);
    /** @inheritdoc */
    area(): number;
    /** @inheritdoc */
    perimeter(): number;
    /** @inheritdoc */
    copy(source: Circle): this;
    /** @inheritdoc */
    toJSON(): CircleJSON;
    /**
     * Creates a circle from serialized JSON.
     *
     * @param json - JSON with `kind: "circle"` and a `radius` field.
     * @returns A new circle instance.
     */
    static fromJSON(json: CircleJSON): Circle;
}
/**
 * Creates a circle with the given radius.
 *
 * @param radius - Circle radius. Must be greater than 0.
 * @returns A new {@link Circle} instance.
 */
export declare function createCircle(radius: number): Circle;
