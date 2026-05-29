import { Shape, type TriangleJSON } from "../types/shape";
export declare class Triangle extends Shape {
    readonly kind = "triangle";
    private _sideA;
    private _sideB;
    private _sideC;
    constructor(sideA?: number, sideB?: number, sideC?: number);
    get sideA(): number;
    set sideA(value: number);
    get sideB(): number;
    set sideB(value: number);
    get sideC(): number;
    set sideC(value: number);
    area(): number;
    perimeter(): number;
    copy(source: Triangle): this;
    toJSON(): TriangleJSON;
    static fromJSON(json: TriangleJSON): Triangle;
}
export declare function createTriangle(sideA: number, sideB: number, sideC: number): Triangle;
