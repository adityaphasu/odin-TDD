import { test, expect } from "vitest";
import { caesarCipher } from "./caesarCipher";

test("caesarCipher", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("caesarCipher", () => {
  expect(caesarCipher("abc", 6)).toBe("ghi");
});

test("caesarCipher", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("caesarCipher", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
