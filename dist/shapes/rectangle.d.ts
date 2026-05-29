import { Shape, type RectangleJSON } from "../types/shape";
/**
 * A rectangle defined by {@link Rectangle.width | width} and {@link Rectangle.height | height}.
 */
export declare class Rectangle extends Shape {
    readonly kind = "rectangle";
    private _width;
    private _height;
    /**
     * @param width - Rectangle width. Must be greater than 0. Defaults to `1`.
     * @param height - Rectangle height. Must be greater than 0. Defaults to `1`.
     */
    constructor(width?: number, height?: number);
    /** Rectangle width. */
    get width(): number;
    /**
     * @param value - New width. Must be greater than 0.
     */
    set width(value: number);
    /** Rectangle height. */
    get height(): number;
    /**
     * @param value - New height. Must be greater than 0.
     */
    set height(value: number);
    /** @inheritdoc */
    area(): number;
    /** @inheritdoc */
    perimeter(): number;
    /** @inheritdoc */
    copy(source: Rectangle): this;
    /** @inheritdoc */
    toJSON(): RectangleJSON;
    /**
     * Creates a rectangle from serialized JSON.
     *
     * @param json - JSON with `kind: "rectangle"` and `width` / `height` fields.
     * @returns A new rectangle instance.
     */
    static fromJSON(json: RectangleJSON): Rectangle;
}
/**
 * Creates a rectangle with the given dimensions.
 *
 * @param width - Rectangle width. Must be greater than 0.
 * @param height - Rectangle height. Must be greater than 0.
 * @returns A new {@link Rectangle} instance.
 */
export declare function createRectangle(width: number, height: number): Rectangle;
