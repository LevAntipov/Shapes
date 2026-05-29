import { assertPositive } from "../core/validation";
import { Shape, type CircleJSON } from "../types/shape";

/**
 * A circle defined by its {@link Circle.radius | radius}.
 */
export class Circle extends Shape {
  public readonly kind = "circle";
  private _radius: number;

  /**
   * @param radius - Circle radius. Must be greater than 0. Defaults to `1` (used internally by {@link Shape.clone | clone}).
   */
  constructor(radius = 1) {
    super();
    assertPositive(radius, "radius");
    this._radius = radius;
  }

  /** Circle radius. */
  get radius(): number {
    return this._radius;
  }

  /**
   * @param value - New radius. Must be greater than 0.
   */
  set radius(value: number) {
    assertPositive(value, "radius");
    this._radius = value;
  }

  /** @inheritdoc */
  area(): number {
    return Math.PI * this._radius * this._radius;
  }

  /** @inheritdoc */
  perimeter(): number {
    return 2 * Math.PI * this._radius;
  }

  /** @inheritdoc */
  copy(source: Circle): this {
    if (source.kind !== "circle") {
      throw new Error("Circle.copy(): source is not a circle");
    }

    this.radius = source.radius;
    return this;
  }

  /** @inheritdoc */
  toJSON(): CircleJSON {
    return {
      kind: "circle",
      radius: this.radius,
    };
  }

  /**
   * Creates a circle from serialized JSON.
   *
   * @param json - JSON with `kind: "circle"` and a `radius` field.
   * @returns A new circle instance.
   */
  static fromJSON(json: CircleJSON): Circle {
    return new Circle(json.radius);
  }
}

/**
 * Creates a circle with the given radius.
 *
 * @param radius - Circle radius. Must be greater than 0.
 * @returns A new {@link Circle} instance.
 */
export function createCircle(radius: number): Circle {
  return new Circle(radius);
}