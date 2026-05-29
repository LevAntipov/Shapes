"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
exports.createCircle = createCircle;
const validation_1 = require("../core/validation");
const shape_1 = require("../types/shape");
class Circle extends shape_1.Shape {
    constructor(radius = 1) {
        super();
        this.kind = "circle";
        (0, validation_1.assertPositive)(radius, "radius");
        this._radius = radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        (0, validation_1.assertPositive)(value, "radius");
        this._radius = value;
    }
    area() {
        return Math.PI * this._radius * this._radius;
    }
    perimeter() {
        return 2 * Math.PI * this._radius;
    }
    copy(source) {
        if (source.kind !== "circle") {
            throw new Error("Circle.copy(): source is not a circle");
        }
        this.radius = source.radius;
        return this;
    }
    toJSON() {
        return {
            kind: "circle",
            radius: this.radius,
        };
    }
    static fromJSON(json) {
        (0, validation_1.assertShapeKind)(json, "circle");
        return new Circle(json.radius);
    }
}
exports.Circle = Circle;
function createCircle(radius) {
    return new Circle(radius);
}
