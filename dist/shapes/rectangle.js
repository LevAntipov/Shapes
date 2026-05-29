"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
exports.createRectangle = createRectangle;
const validation_1 = require("../core/validation");
const shape_1 = require("../types/shape");
/**
 * A rectangle defined by {@link Rectangle.width | width} and {@link Rectangle.height | height}.
 */
class Rectangle extends shape_1.Shape {
    /**
     * @param width - Rectangle width. Must be greater than 0. Defaults to `1`.
     * @param height - Rectangle height. Must be greater than 0. Defaults to `1`.
     */
    constructor(width = 1, height = 1) {
        super();
        this.kind = "rectangle";
        (0, validation_1.assertPositive)(width, "width");
        (0, validation_1.assertPositive)(height, "height");
        this._width = width;
        this._height = height;
    }
    /** Rectangle width. */
    get width() {
        return this._width;
    }
    /**
     * @param value - New width. Must be greater than 0.
     */
    set width(value) {
        (0, validation_1.assertPositive)(value, "width");
        this._width = value;
    }
    /** Rectangle height. */
    get height() {
        return this._height;
    }
    /**
     * @param value - New height. Must be greater than 0.
     */
    set height(value) {
        (0, validation_1.assertPositive)(value, "height");
        this._height = value;
    }
    /** @inheritdoc */
    area() {
        return this._width * this._height;
    }
    /** @inheritdoc */
    perimeter() {
        return 2 * (this._width + this._height);
    }
    /** @inheritdoc */
    copy(source) {
        if (source.kind !== "rectangle") {
            throw new Error("Rectangle.copy(): source is not a rectangle");
        }
        this.width = source.width;
        this.height = source.height;
        return this;
    }
    /** @inheritdoc */
    toJSON() {
        return {
            kind: "rectangle",
            width: this.width,
            height: this.height,
        };
    }
    /**
     * Creates a rectangle from serialized JSON.
     *
     * @param json - JSON with `kind: "rectangle"` and `width` / `height` fields.
     * @returns A new rectangle instance.
     */
    static fromJSON(json) {
        return new Rectangle(json.width, json.height);
    }
}
exports.Rectangle = Rectangle;
/**
 * Creates a rectangle with the given dimensions.
 *
 * @param width - Rectangle width. Must be greater than 0.
 * @param height - Rectangle height. Must be greater than 0.
 * @returns A new {@link Rectangle} instance.
 */
function createRectangle(width, height) {
    return new Rectangle(width, height);
}
