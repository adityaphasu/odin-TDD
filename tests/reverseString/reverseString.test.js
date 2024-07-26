import { test, expect } from "vitest";
import { reverseString } from "./reverseString";

test("reverseString", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("reverseString", () => {
  expect(reverseString("world")).toBe("dlrow");
});

test("reverseString", () => {
  expect(reverseString("emerald")).toBe("dlareme");
});

test("reverseString", () => {
  expect(reverseString("Today is a good day")).toBe("yad doog a si yadoT");
});
