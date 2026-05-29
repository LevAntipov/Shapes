import type { ShapeJSON, ShapeKind } from "../types/shape";
export declare function assertShapeKind(json: ShapeJSON, expected: ShapeKind): void;
export declare function assertFiniteNumber(value: number, label?: string): void;
export declare function assertPositive(value: number, label?: string): void;
export declare function assertTriangleInequality(a: number, b: number, c: number): void;
