export type ShapeKind = "circle" | "rectangle" | "triangle";
export interface ShapeJSON {
    readonly kind: ShapeKind;
}
export interface CircleJSON extends ShapeJSON {
    readonly kind: "circle";
    readonly radius: number;
}
export interface RectangleJSON extends ShapeJSON {
    readonly kind: "rectangle";
    readonly width: number;
    readonly height: number;
}
export interface TriangleJSON extends ShapeJSON {
    readonly kind: "triangle";
    readonly sideA: number;
    readonly sideB: number;
    readonly sideC: number;
}
export type SerializedShape = CircleJSON | RectangleJSON | TriangleJSON;
export declare abstract class Shape {
    abstract readonly kind: ShapeKind;
    abstract area(): number;
    abstract perimeter(): number;
    abstract copy(source: this): this;
    abstract toJSON(): SerializedShape;
    clone(): this;
}
