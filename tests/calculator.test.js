import { expect, describe, it } from "vitest";
import { calculator } from "../src/calculator";

describe("calculator", () => {
  it("should correctly add, subtract, multiply, and divide with positive numbers", () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.subtract(2, 1)).toBe(1);
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.divide(6, 3)).toBe(2);
  });

  it("should correctly add, subtract, multiply, and divide with negative numbers", () => {
    expect(calculator.add(-1, -2)).toBe(-3);
    expect(calculator.subtract(-2, -1)).toBe(-1);
    expect(calculator.multiply(-2, -3)).toBe(6);
    expect(calculator.divide(-6, -3)).toBe(2);
  });

  it("should correctly handle edge cases and zero", () => {
    expect(calculator.add(0, 0)).toBe(0);
    expect(calculator.subtract(5, 2)).toBe(3);
    expect(calculator.multiply(4, 0)).toBe(0);
    expect(calculator.divide(10, 2)).toBe(5);
    expect(calculator.divide(10, 0)).toBe(Infinity);
  });
});
