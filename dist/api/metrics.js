"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.area = area;
exports.perimeter = perimeter;
/**
 * Computes the area of any shape.
 *
 * @param shape - The shape to measure.
 * @returns The area.
 */
function area(shape) {
    return shape.area();
}
/**
 * Computes the perimeter of any shape.
 * For a circle this is the circumference.
 *
 * @param shape - The shape to measure.
 * @returns The perimeter length.
 */
function perimeter(shape) {
    return shape.perimeter();
}
