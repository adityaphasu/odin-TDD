import { expect, describe, it } from "vitest";
import { capitalize } from "../src/capitalize";

describe("capitalize", () => {
  it("should capitalize various strings", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("world")).toBe("World");
    expect(capitalize("emerald")).toBe("Emerald");
  });
});
