import { expect, describe, it } from "vitest";
import { caesarCipher } from "../src/caesarCipher";

describe("caesarCipher", () => {
  it("should correctly handle boundary condition by shifting 'xyz' by 3 to 'abc'", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  it("should shift 'abc' by 6 to 'ghi'", () => {
    expect(caesarCipher("abc", 6)).toBe("ghi");
  });

  it("should correctly shift uppercase letters", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  it("should correctly handle punctuations and spaces'", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});
