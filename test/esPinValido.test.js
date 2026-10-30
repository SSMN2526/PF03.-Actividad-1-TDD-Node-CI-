import { describe, it, expect } from "vitest";
import { esPinValido } from "../src/esPinValido.js";

describe("esPinValido", () => {
  it("rechaza null y undefined", () => {
    expect(esPinValido(null)).toBe(false);
    expect(esPinValido(undefined)).toBe(false);
  });
  it("rechaza cadena vacía", () => {
    expect(esPinValido("")).toBe(false);
  });
  it("rechaza longitudes distintas de 4 o 6", () => {
    for (const pin of ["123", "12345", "1234567"]) {
      expect(esPinValido(pin)).toBe(false);
    }
  });
  it("rechaza caracteres no numéricos", () => {
    for (const pin of ["12a4", "12 34", "12.4", "12-456"]) {
      expect(esPinValido(pin)).toBe(false);
    }
  });
  it("rechaza todos los dígitos iguales", () => {
    for (const pin of ["1111", "888888", "0000"]) {
      expect(esPinValido(pin)).toBe(false);
    }
  });
  it("acepta PINs válidos de 4 y 6 dígitos", () => {
    for (const pin of ["1234", "123456", "1122", "908172"]) {
      expect(esPinValido(pin)).toBe(true);
    }
  });
});