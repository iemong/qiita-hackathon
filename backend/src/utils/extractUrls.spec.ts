import { describe, expect, it } from "bun:test";
import { extractUrls } from "./extractUrls";

describe("extractUrls", () => {
  it("should extract URLs from text", () => {
    const text = "Check out https://example.com and https://example.com/foo";
    const urls = extractUrls(text);
    expect(urls).toEqual(["https://example.com", "https://example.com/foo"]);
  });

  it("should not return anything if there are no URLs", () => {
    const text = "This is a test";
    const urls = extractUrls(text);
    expect(urls).toEqual([]);
  });
});
