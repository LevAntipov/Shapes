"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
exports.createRectangle = createRectangle;
const validation_1 = require("../core/validation");
const shape_1 = require("../types/shape");
class Rectangle extends shape_1.Shape {
    constructor(width = 1, height = 1) {
        super();
        this.kind = "rectangle";
        (0, validation_1.assertPositive)(width, "width");
        (0, validation_1.assertPositive)(height, "height");
        this._width = width;
        this._height = height;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        (0, validation_1.assertPositive)(value, "width");
        this._width = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        (0, validation_1.assertPositive)(value, "height");
        this._height = value;
    }
    area() {
        return this._width * this._height;
    }
    perimeter() {
        return 2 * (this._width + this._height);
    }
    copy(source) {
        if (source.kind !== "rectangle") {
            throw new Error("Rectangle.copy(): source is not a rectangle");
        }
        this.width = source.width;
        this.height = source.height;
        return this;
    }
    toJSON() {
        return {
            kind: "rectangle",
            width: this.width,
            height: this.height,
        };
    }
    static fromJSON(json) {
        (0, validation_1.assertShapeKind)(json, "rectangle");
        return new Rectangle(json.width, json.height);
    }
}
exports.Rectangle = Rectangle;
function createRectangle(width, height) {
    return new Rectangle(width, height);
}
