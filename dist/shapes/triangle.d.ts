import { Shape, type TriangleJSON } from "../types/shape";
/**
 * A triangle defined by three side lengths
 * ({@link Triangle.sideA | sideA}, {@link Triangle.sideB | sideB}, {@link Triangle.sideC | sideC}).
 */
export declare class Triangle extends Shape {
    readonly kind = "triangle";
    private _sideA;
    private _sideB;
    private _sideC;
    /**
     * @param sideA - First side. Must be greater than 0. Defaults to `3`.
     * @param sideB - Second side. Must be greater than 0. Defaults to `4`.
     * @param sideC - Third side. Must be greater than 0. Defaults to `5`.
     * @throws {Error} If the sides do not satisfy the triangle inequality.
     */
    constructor(sideA?: number, sideB?: number, sideC?: number);
    /** Length of side A. */
    get sideA(): number;
    /**
     * @param value - New length for side A. Must satisfy the triangle inequality with the other sides.
     */
    set sideA(value: number);
    /** Length of side B. */
    get sideB(): number;
    /**
     * @param value - New length for side B. Must satisfy the triangle inequality with the other sides.
     */
    set sideB(value: number);
    /** Length of side C. */
    get sideC(): number;
    /**
     * @param value - New length for side C. Must satisfy the triangle inequality with the other sides.
     */
    set sideC(value: number);
    /** @inheritdoc */
    area(): number;
    /** @inheritdoc */
    perimeter(): number;
    /** @inheritdoc */
    copy(source: Triangle): this;
    /** @inheritdoc */
    toJSON(): TriangleJSON;
    /**
     * Creates a triangle from serialized JSON.
     *
     * @param json - JSON with `kind: "triangle"` and `sideA` / `sideB` / `sideC` fields.
     * @returns A new triangle instance.
     * @throws {Error} If the sides do not satisfy the triangle inequality.
     */
    static fromJSON(json: TriangleJSON): Triangle;
}
/**
 * Creates a triangle with the given side lengths.
 *
 * @param sideA - First side. Must be greater than 0.
 * @param sideB - Second side. Must be greater than 0.
 * @param sideC - Third side. Must be greater than 0.
 * @returns A new {@link Triangle} instance.
 * @throws {Error} If the sides do not satisfy the triangle inequality.
 */
export declare function createTriangle(sideA: number, sideB: number, sideC: number): Triangle;
