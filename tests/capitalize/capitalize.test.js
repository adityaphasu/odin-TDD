import { test, expect } from "vitest";
import { capitalize } from "./capitalize";

test("capitalize", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("capitalize", () => {
  expect(capitalize("world")).toBe("World");
});

test("capitalize", () => {
  expect(capitalize("emerald")).toBe("Emerald");
});
