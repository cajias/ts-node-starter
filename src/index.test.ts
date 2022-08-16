import { calculator } from "./index";

describe("A thing", () => {
  it("should work", () => {
    expect(calculator(1, 2)).toBe(3);
  });

  it("should be ok", () => {
    expect(calculator(1, 2)).toBe(3);
  });

  describe("a nested thing", () => {
    it("should work", () => {
      expect(calculator(1, 2)).toBe(3);
    });
  });
});
