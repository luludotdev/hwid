import { expect, test } from "vitest";
import { hwid } from "../src/index";

test("is a function", () => {
  expect(typeof hwid).eq("function");
});

test("returns a string with length > 0", async () => {
  const id = await hwid();
  expect(typeof id).eq("string");
  expect(id.length).greaterThan(0);
});
