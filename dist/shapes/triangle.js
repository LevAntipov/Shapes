"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
exports.createTriangle = createTriangle;
const validation_1 = require("../core/validation");
const shape_1 = require("../types/shape");
class Triangle extends shape_1.Shape {
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
    get sideA() {
        return this._sideA;
    }
    set sideA(value) {
        (0, validation_1.assertPositive)(value, "sideA");
        (0, validation_1.assertTriangleInequality)(value, this._sideB, this._sideC);
        this._sideA = value;
    }
    get sideB() {
        return this._sideB;
    }
    set sideB(value) {
        (0, validation_1.assertPositive)(value, "sideB");
        (0, validation_1.assertTriangleInequality)(this._sideA, value, this._sideC);
        this._sideB = value;
    }
    get sideC() {
        return this._sideC;
    }
    set sideC(value) {
        (0, validation_1.assertPositive)(value, "sideC");
        (0, validation_1.assertTriangleInequality)(this._sideA, this._sideB, value);
        this._sideC = value;
    }
    area() {
        const semiPerimeter = this.perimeter() / 2;
        return Math.sqrt(semiPerimeter *
            (semiPerimeter - this._sideA) *
            (semiPerimeter - this._sideB) *
            (semiPerimeter - this._sideC));
    }
    perimeter() {
        return this._sideA + this._sideB + this._sideC;
    }
    copy(source) {
        if (source.kind !== "triangle") {
            throw new Error("Triangle.copy(): source is not a triangle");
        }
        this.sideA = source.sideA;
        this.sideB = source.sideB;
        this.sideC = source.sideC;
        return this;
    }
    toJSON() {
        return {
            kind: "triangle",
            sideA: this.sideA,
            sideB: this.sideB,
            sideC: this.sideC,
        };
    }
    static fromJSON(json) {
        (0, validation_1.assertShapeKind)(json, "triangle");
        return new Triangle(json.sideA, json.sideB, json.sideC);
    }
}
exports.Triangle = Triangle;
function createTriangle(sideA, sideB, sideC) {
    return new Triangle(sideA, sideB, sideC);
}
