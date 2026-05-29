"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    clone() {
        const Ctor = this.constructor;
        return new Ctor().copy(this);
    }
}
exports.Shape = Shape;
