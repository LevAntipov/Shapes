"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
exports.createTriangle = createTriangle;
const validation_1 = require("../core/validation");
const shape_1 = require("../types/shape");
/**
 * A triangle defined by three side lengths
 * ({@link Triangle.sideA | sideA}, {@link Triangle.sideB | sideB}, {@link Triangle.sideC | sideC}).
 */
class Triangle extends shape_1.Shape {
    /**
     * @param sideA - First side. Must be greater than 0. Defaults to `3`.
     * @param sideB - Second side. Must be greater than 0. Defaults to `4`.
     * @param sideC - Third side. Must be greater than 0. Defaults to `5`.
     * @throws {Error} If the sides do not satisfy the triangle inequality.
     */
    constructor(sideA = 3, sideB = 4, sideC = 5) {
        super();
        this.kind = "triangle";
        (0, validation_1.assertPositive)(sideA, "sideA");
        (0, validation_1.assertPositive)(sideB, "sideB");
        (0, validation_1.assertPositive)(sideC, "sideC");
        (0, validation_1.assertTriangleInequality)(sideA, sideB, sideC);
        this._sideA = sideA;
        this._sideB = sideB;
        this._sideC = sideC;
    }
    /** Length of side A. */
    get sideA() {
        return this._sideA;
    }
    /**
     * @param value - New length for side A. Must satisfy the triangle inequality with the other sides.
     */
    set sideA(value) {
        (0, validation_1.assertPositive)(value, "sideA");
        (0, validation_1.assertTriangleInequality)(value, this._sideB, this._sideC);
        this._sideA = value;
    }
    /** Length of side B. */
    get sideB() {
        return this._sideB;
    }
    /**
     * @param value - New length for side B. Must satisfy the triangle inequality with the other sides.
     */
    set sideB(value) {
        (0, validation_1.assertPositive)(value, "sideB");
        (0, validation_1.assertTriangleInequality)(this._sideA, value, this._sideC);
        this._sideB = value;
    }
    /** Length of side C. */
    get sideC() {
        return this._sideC;
    }
    /**
     * @param value - New length for side C. Must satisfy the triangle inequality with the other sides.
     */
    set sideC(value) {
        (0, validation_1.assertPositive)(value, "sideC");
        (0, validation_1.assertTriangleInequality)(this._sideA, this._sideB, value);
        this._sideC = value;
    }
    /** @inheritdoc */
    area() {
        const semiPerimeter = this.perimeter() / 2;
        return Math.sqrt(semiPerimeter *
            (semiPerimeter - this._sideA) *
            (semiPerimeter - this._sideB) *
            (semiPerimeter - this._sideC));
    }
    /** @inheritdoc */
    perimeter() {
        return this._sideA + this._sideB + this._sideC;
    }
    /** @inheritdoc */
    copy(source) {
        if (source.kind !== "triangle") {
            throw new Error("Triangle.copy(): source is not a triangle");
        }
        this.sideA = source.sideA;
        this.sideB = source.sideB;
        this.sideC = source.sideC;
        return this;
    }
    /** @inheritdoc */
    toJSON() {
        return {
            kind: "triangle",
            sideA: this.sideA,
            sideB: this.sideB,
            sideC: this.sideC,
        };
    }
    /**
     * Creates a triangle from serialized JSON.
     *
     * @param json - JSON with `kind: "triangle"` and `sideA` / `sideB` / `sideC` fields.
     * @returns A new triangle instance.
     * @throws {Error} If the sides do not satisfy the triangle inequality.
     */
    static fromJSON(json) {
        return new Triangle(json.sideA, json.sideB, json.sideC);
    }
}
exports.Triangle = Triangle;
/**
 * Creates a triangle with the given side lengths.
 *
 * @param sideA - First side. Must be greater than 0.
 * @param sideB - Second side. Must be greater than 0.
 * @param sideC - Third side. Must be greater than 0.
 * @returns A new {@link Triangle} instance.
 * @throws {Error} If the sides do not satisfy the triangle inequality.
 */
function createTriangle(sideA, sideB, sideC) {
    return new Triangle(sideA, sideB, sideC);
}
