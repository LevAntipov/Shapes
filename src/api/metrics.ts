import { Shape } from "../types/shape";

/**
 * Computes the area of any shape.
 *
 * @param shape - The shape to measure.
 * @returns The area.
 */
export function area(shape: Shape): number {
  return shape.area();
}

/**
 * Computes the perimeter of any shape.
 * For a circle this is the circumference.
 *
 * @param shape - The shape to measure.
 * @returns The perimeter length.
 */
export function perimeter(shape: Shape): number {
  return shape.perimeter();
}
