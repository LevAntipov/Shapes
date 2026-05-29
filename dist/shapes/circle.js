"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
exports.createCircle = createCircle;
const validation_1 = require("../core/validation");
const shape_1 = require("../types/shape");
/**
 * A circle defined by its {@link Circle.radius | radius}.
 */
class Circle extends shape_1.Shape {
    /**
     * @param radius - Circle radius. Must be greater than 0. Defaults to `1` (used internally by {@link Shape.clone | clone}).
     */
    constructor(radius = 1) {
        super();
        this.kind = "circle";
        (0, validation_1.assertPositive)(radius, "radius");
        this._radius = radius;
    }
    /** Circle radius. */
    get radius() {
        return this._radius;
    }
    /**
     * @param value - New radius. Must be greater than 0.
     */
    set radius(value) {
        (0, validation_1.assertPositive)(value, "radius");
        this._radius = value;
    }
    /** @inheritdoc */
    area() {
        return Math.PI * this._radius * this._radius;
    }
    /** @inheritdoc */
    perimeter() {
        return 2 * Math.PI * this._radius;
    }
    /** @inheritdoc */
    copy(source) {
        if (source.kind !== "circle") {
            throw new Error("Circle.copy(): source is not a circle");
        }
        this.radius = source.radius;
        return this;
    }
    /** @inheritdoc */
    toJSON() {
        return {
            kind: "circle",
            radius: this.radius,
        };
    }
    /**
     * Creates a circle from serialized JSON.
     *
     * @param json - JSON with `kind: "circle"` and a `radius` field.
     * @returns A new circle instance.
     */
    static fromJSON(json) {
        return new Circle(json.radius);
    }
}
exports.Circle = Circle;
/**
 * Creates a circle with the given radius.
 *
 * @param radius - Circle radius. Must be greater than 0.
 * @returns A new {@link Circle} instance.
 */
function createCircle(radius) {
    return new Circle(radius);
}
