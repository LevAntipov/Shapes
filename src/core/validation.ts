const DEFAULT_NUMBER_LABEL = "value";

export function assertFiniteNumber(value: number, label = DEFAULT_NUMBER_LABEL): void {
  if (!Number.isFinite(value)) {
    throw new Error(`${label} must be a finite number`);
  }
}

export function assertPositive(value: number, label = DEFAULT_NUMBER_LABEL): void {
  assertFiniteNumber(value, label);

  if (value <= 0) {
    throw new Error(`${label} must be greater than 0`);
  }
}

export function assertTriangleInequality(a: number, b: number, c: number): void {
  if (a + b <= c || a + c <= b || b + c <= a) {
    throw new Error("Triangle sides violate triangle inequality");
  }
}
