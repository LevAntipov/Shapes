import { assertPositive } from "../core/validation";
import { Shape, type RectangleJSON } from "../types/shape";

/**
 * A rectangle defined by {@link Rectangle.width | width} and {@link Rectangle.height | height}.
 */
export class Rectangle extends Shape {
  public readonly kind = "rectangle";
  private _width: number;
  private _height: number;

  /**
   * @param width - Rectangle width. Must be greater than 0. Defaults to `1`.
   * @param height - Rectangle height. Must be greater than 0. Defaults to `1`.
   */
  constructor(width = 1, height = 1) {
    super();
    assertPositive(width, "width");
    assertPositive(height, "height");

    this._width = width;
    this._height = height;
  }

  /** Rectangle width. */
  get width(): number {
    return this._width;
  }

  /**
   * @param value - New width. Must be greater than 0.
   */
  set width(value: number) {
    assertPositive(value, "width");
    this._width = value;
  }

  /** Rectangle height. */
  get height(): number {
    return this._height;
  }

  /**
   * @param value - New height. Must be greater than 0.
   */
  set height(value: number) {
    assertPositive(value, "height");
    this._height = value;
  }

  /** @inheritdoc */
  area(): number {
    return this._width * this._height;
  }

  /** @inheritdoc */
  perimeter(): number {
    return 2 * (this._width + this._height);
  }

  /** @inheritdoc */
  copy(source: Rectangle): this {
    if (source.kind !== "rectangle") {
      throw new Error("Rectangle.copy(): source is not a rectangle");
    }

    this.width = source.width;
    this.height = source.height;
    return this;
  }

  /** @inheritdoc */
  toJSON(): RectangleJSON {
    return {
      kind: "rectangle",
      width: this.width,
      height: this.height,
    };
  }

  /**
   * Creates a rectangle from serialized JSON.
   *
   * @param json - JSON with `kind: "rectangle"` and `width` / `height` fields.
   * @returns A new rectangle instance.
   */
  static fromJSON(json: RectangleJSON): Rectangle {
    return new Rectangle(json.width, json.height);
  }
}

/**
 * Creates a rectangle with the given dimensions.
 *
 * @param width - Rectangle width. Must be greater than 0.
 * @param height - Rectangle height. Must be greater than 0.
 * @returns A new {@link Rectangle} instance.
 */
export function createRectangle(width: number, height: number): Rectangle {
  return new Rectangle(width, height);
}
