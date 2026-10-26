import { describe, it, expect } from "vitest";
import { fibonacci } from "../src/fibonacci.js";

describe("fibonacci", () => {
  it("lanza RangeError si n es negativo", () => {
    expect(() => fibonacci(-1)).toThrow(RangeError);
    expect(() => fibonacci(-1)).toThrow("solo números enteros ≥ 0");
  });
  it("lanza RangeError si n no es entero", () => {
    expect(() => fibonacci(1.5)).toThrow(RangeError);
  });
  it("f(0) = 0", () => expect(fibonacci(0)).toBe(0));
  it("f(1) = 1", () => expect(fibonacci(1)).toBe(1));
  it("f(2) = 1", () => expect(fibonacci(2)).toBe(1));
  it("f(10) = 55", () => expect(fibonacci(10)).toBe(55));
});