"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
/**
 * Base class for geometric shapes.
 *
 * Subclasses implement dimensions, {@link Shape.area | area},
 * {@link Shape.perimeter | perimeter}, {@link Shape.copy | copy}, and
 * {@link Shape.toJSON | toJSON}. {@link Shape.clone | clone} is shared.
 */
class Shape {
    /**
     * Returns a new shape with values copied from this instance.
     *
     * @returns A clone of this instance.
     */
    clone() {
        const Ctor = this.constructor;
        return new Ctor().copy(this);
    }
}
exports.Shape = Shape;
