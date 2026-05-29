import { Shape, type CircleJSON } from "../types/shape";
export declare class Circle extends Shape {
    readonly kind = "circle";
    private _radius;
    constructor(radius?: number);
    get radius(): number;
    set radius(value: number);
    area(): number;
    perimeter(): number;
    copy(source: Circle): this;
    toJSON(): CircleJSON;
    static fromJSON(json: CircleJSON): Circle;
}
export declare function createCircle(radius: number): Circle;
