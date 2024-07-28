import { expect, describe, it } from "vitest";
import { analyzeArray } from "../src/analyzeArray";

describe("analyzeArray", () => {
  it("should return correct analysis for array [1, 8, 3, 4, 2, 6]", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  it("should return correct analysis for array [1, 2, 3, 4, 5, 6]", () => {
    expect(analyzeArray([1, 2, 3, 4, 5, 6])).toEqual({
      average: 3.5,
      min: 1,
      max: 6,
      length: 6,
    });
  });
});
