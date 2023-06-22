import { describe, it, expect, vi } from "vitest";
import { shuffle } from "./shuffle";

describe("shuffle", () => {
  it("should return a shuffled array", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const shuffled = shuffle(array);
    expect(shuffled).not.toBe(array);
    expect(shuffled).toEqual(expect.arrayContaining(array));
    expect(shuffled.length).toEqual(array.length);
  });

  it("should empty array give empty array in return", () => {
    const emptyArray: number[] = [];
    const shuffled = shuffle(emptyArray);
    expect(shuffled).toEqual([]);
  });

  it("math.random shuffle", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const mockRandom = vi.fn();
    mockRandom.mockReturnValueOnce(0.5);
    mockRandom.mockReturnValueOnce(0.1);
    mockRandom.mockReturnValueOnce(0.8);
    mockRandom.mockReturnValueOnce(0.3);
    mockRandom.mockReturnValueOnce(0.2);
    mockRandom.mockReturnValueOnce(0.6);
    mockRandom.mockReturnValueOnce(0.4);
    mockRandom.mockReturnValueOnce(0.7);

    Math.random = mockRandom;

    const shuffled = shuffle(array);
    expect(shuffled).toEqual([3, 4, 6, 7, 2, 8, 1, 5]);
  });

  it("should be immutable", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const shuffled = shuffle(array);
    expect(shuffled).not.toBe(array);
    expect(array).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});