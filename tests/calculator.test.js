import { test, expect } from "vitest";
import { calculator } from "../src/calculator";

test("calculator", () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.subtract(2, 1)).toBe(1);
  expect(calculator.multiply(2, 3)).toBe(6);
  expect(calculator.divide(6, 3)).toBe(2);
});
test("calculator", () => {
  expect(calculator.add(0, 0)).toBe(0);
  expect(calculator.subtract(5, 2)).toBe(3);
  expect(calculator.multiply(4, 0)).toBe(0);
  expect(calculator.divide(10, 2)).toBe(5);
  expect(calculator.divide(10, 0)).toBe(Infinity);
});
