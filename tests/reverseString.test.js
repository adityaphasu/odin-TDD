import { expect, describe, it } from "vitest";
import { reverseString } from "../src/reverseString";

describe("reverseString", () => {
  it("should reverse various strings", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("world")).toBe("dlrow");
    expect(reverseString("emerald")).toBe("dlareme");
  });

  it("should reverse empty string", () => {
    expect(reverseString("")).toBe("");
  });

  it("should reverse string with spaces", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
    expect(reverseString("Today is a good day")).toBe("yad doog a si yadoT");
  });
});
