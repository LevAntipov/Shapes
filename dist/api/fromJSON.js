"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shapeFromJSON = shapeFromJSON;
const circle_1 = require("../shapes/circle");
const rectangle_1 = require("../shapes/rectangle");
const triangle_1 = require("../shapes/triangle");
function shapeFromJSON(json) {
    switch (json.kind) {
        case "circle":
            return circle_1.Circle.fromJSON(json);
        case "rectangle":
            return rectangle_1.Rectangle.fromJSON(json);
        case "triangle":
            return triangle_1.Triangle.fromJSON(json);
        default: {
            const _exhaustive = json;
            throw new Error(`Unknown shape kind: ${String(_exhaustive.kind)}`);
        }
    }
}
