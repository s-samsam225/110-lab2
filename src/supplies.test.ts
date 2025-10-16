import { describe, it, expect } from "vitest";
import { supplies } from "./supplies";

describe("supplies", () => {
  it("should have at least 3 items", () => {
    expect(supplies.length).toBeGreaterThanOrEqual(3);
  });

  it("should include 'cups'", () => {
    expect(supplies).toContain("cups");
  });
});
