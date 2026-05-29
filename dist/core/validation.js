"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertShapeKind = assertShapeKind;
exports.assertFiniteNumber = assertFiniteNumber;
exports.assertPositive = assertPositive;
exports.assertTriangleInequality = assertTriangleInequality;
const DEFAULT_NUMBER_LABEL = "value";
function assertShapeKind(json, expected) {
    if (json.kind !== expected) {
        throw new Error(`Expected shape kind "${expected}", got "${String(json.kind)}"`);
    }
}
function assertFiniteNumber(value, label = DEFAULT_NUMBER_LABEL) {
    if (!Number.isFinite(value)) {
        throw new Error(`${label} must be a finite number`);
    }
}
function assertPositive(value, label = DEFAULT_NUMBER_LABEL) {
    assertFiniteNumber(value, label);
    if (value <= 0) {
        throw new Error(`${label} must be greater than 0`);
    }
}
function assertTriangleInequality(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
        throw new Error("Triangle sides violate triangle inequality");
    }
}
