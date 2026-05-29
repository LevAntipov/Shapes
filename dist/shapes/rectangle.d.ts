import { Shape, type RectangleJSON } from "../types/shape";
export declare class Rectangle extends Shape {
    readonly kind = "rectangle";
    private _width;
    private _height;
    constructor(width?: number, height?: number);
    get width(): number;
    set width(value: number);
    get height(): number;
    set height(value: number);
    area(): number;
    perimeter(): number;
    copy(source: Rectangle): this;
    toJSON(): RectangleJSON;
    static fromJSON(json: RectangleJSON): Rectangle;
}
export declare function createRectangle(width: number, height: number): Rectangle;
