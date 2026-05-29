import { assertPositive, assertTriangleInequality } from "../core/validation";
import { Shape, type TriangleJSON } from "../types/shape";

/**
 * A triangle defined by three side lengths
 * ({@link Triangle.sideA | sideA}, {@link Triangle.sideB | sideB}, {@link Triangle.sideC | sideC}).
 */
export class Triangle extends Shape {
  public readonly kind = "triangle";
  private _sideA: number;
  private _sideB: number;
  private _sideC: number;

  /**
   * @param sideA - First side. Must be greater than 0. Defaults to `3`.
   * @param sideB - Second side. Must be greater than 0. Defaults to `4`.
   * @param sideC - Third side. Must be greater than 0. Defaults to `5`.
   * @throws {Error} If the sides do not satisfy the triangle inequality.
   */
  constructor(sideA = 3, sideB = 4, sideC = 5) {
    super();
    assertPositive(sideA, "sideA");
    assertPositive(sideB, "sideB");
    assertPositive(sideC, "sideC");
    assertTriangleInequality(sideA, sideB, sideC);

    this._sideA = sideA;
    this._sideB = sideB;
    this._sideC = sideC;
  }

  /** Length of side A. */
  get sideA(): number {
    return this._sideA;
  }

  /**
   * @param value - New length for side A. Must satisfy the triangle inequality with the other sides.
   */
  set sideA(value: number) {
    assertPositive(value, "sideA");
    assertTriangleInequality(value, this._sideB, this._sideC);
    this._sideA = value;
  }

  /** Length of side B. */
  get sideB(): number {
    return this._sideB;
  }

  /**
   * @param value - New length for side B. Must satisfy the triangle inequality with the other sides.
   */
  set sideB(value: number) {
    assertPositive(value, "sideB");
    assertTriangleInequality(this._sideA, value, this._sideC);
    this._sideB = value;
  }

  /** Length of side C. */
  get sideC(): number {
    return this._sideC;
  }

  /**
   * @param value - New length for side C. Must satisfy the triangle inequality with the other sides.
   */
  set sideC(value: number) {
    assertPositive(value, "sideC");
    assertTriangleInequality(this._sideA, this._sideB, value);
    this._sideC = value;
  }

  /** @inheritdoc */
  area(): number {
    const semiPerimeter = this.perimeter() / 2;
    return Math.sqrt(
      semiPerimeter *
        (semiPerimeter - this._sideA) *
        (semiPerimeter - this._sideB) *
        (semiPerimeter - this._sideC),
    );
  }

  /** @inheritdoc */
  perimeter(): number {
    return this._sideA + this._sideB + this._sideC;
  }

  /** @inheritdoc */
  copy(source: Triangle): this {
    if (source.kind !== "triangle") {
      throw new Error("Triangle.copy(): source is not a triangle");
    }

    this.sideA = source.sideA;
    this.sideB = source.sideB;
    this.sideC = source.sideC;
    return this;
  }

  /** @inheritdoc */
  toJSON(): TriangleJSON {
    return {
      kind: "triangle",
      sideA: this.sideA,
      sideB: this.sideB,
      sideC: this.sideC,
    };
  }

  /**
   * Creates a triangle from serialized JSON.
   *
   * @param json - JSON with `kind: "triangle"` and `sideA` / `sideB` / `sideC` fields.
   * @returns A new triangle instance.
   * @throws {Error} If the sides do not satisfy the triangle inequality.
   */
  static fromJSON(json: TriangleJSON): Triangle {
    return new Triangle(json.sideA, json.sideB, json.sideC);
  }
}

/**
 * Creates a triangle with the given side lengths.
 *
 * @param sideA - First side. Must be greater than 0.
 * @param sideB - Second side. Must be greater than 0.
 * @param sideC - Third side. Must be greater than 0.
 * @returns A new {@link Triangle} instance.
 * @throws {Error} If the sides do not satisfy the triangle inequality.
 */
export function createTriangle(sideA: number, sideB: number, sideC: number): Triangle {
  return new Triangle(sideA, sideB, sideC);
}
