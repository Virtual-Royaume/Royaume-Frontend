import { describe, it, expect } from "vitest";
import { shuffleMembers } from "./members-shuffle";
import { members } from "#/lib/configs/member";

describe("shuffleMembers", () => {
  it("should return a shuffled array", () => {
    expect(shuffleMembers(members)).not.toBe(members);
  });

  it("a empty array should return a empty array", () => {
    expect(shuffleMembers([])).toEqual([]);
  });
});