export type ShapeKind = "circle" | "rectangle" | "triangle";

/** Base JSON payload shared by all serialized shapes. */
export interface ShapeJSON {
  readonly kind: ShapeKind;
}

/** Serialized circle: `{ kind: "circle", radius }`. */
export interface CircleJSON extends ShapeJSON {
  readonly kind: "circle";
  readonly radius: number;
}

/** Serialized rectangle: `{ kind: "rectangle", width, height }`. */
export interface RectangleJSON extends ShapeJSON {
  readonly kind: "rectangle";
  readonly width: number;
  readonly height: number;
}

/** Serialized triangle: `{ kind: "triangle", sideA, sideB, sideC }`. */
export interface TriangleJSON extends ShapeJSON {
  readonly kind: "triangle";
  readonly sideA: number;
  readonly sideB: number;
  readonly sideC: number;
}

/** Union of all shape JSON representations. */
export type SerializedShape = CircleJSON | RectangleJSON | TriangleJSON;

/**
 * Base class for geometric shapes.
 *
 * Subclasses implement dimensions, {@link Shape.area | area},
 * {@link Shape.perimeter | perimeter}, {@link Shape.copy | copy}, and
 * {@link Shape.toJSON | toJSON}. {@link Shape.clone | clone} is shared.
 */
export abstract class Shape {
  /** Shape discriminator (`"circle"`, `"rectangle"`, or `"triangle"`). */
  abstract readonly kind: ShapeKind;

  /**
   * Computes the area of this shape.
   *
   * @returns The area.
   */
  abstract area(): number;

  /**
   * Computes the perimeter of this shape.
   * For a circle this is the circumference.
   *
   * @returns The perimeter length.
   */
  abstract perimeter(): number;

  /**
   * Copies dimension values from the given shape into this instance.
   *
   * @param source - The shape to copy from. Must be the same kind as this instance.
   * @returns A reference to this instance.
   * @throws {Error} If `source` is not the same shape kind.
   */
  abstract copy(source: this): this;

  /**
   * Serializes this shape into a plain JSON object.
   *
   * @returns A JSON object representing the serialized shape.
   */
  abstract toJSON(): SerializedShape;

  /**
   * Returns a new shape with values copied from this instance.
   *
   * @returns A clone of this instance.
   */
  clone(): this {
    const Ctor = this.constructor as new () => this;
    return new Ctor().copy(this);
  }
}
