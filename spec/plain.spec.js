/* eslint-env jasmine */
/* eslint-disable padded-blocks, import/no-named-as-default-member, no-underscore-dangle, import/no-duplicates, no-duplicate-imports */
import PlainModule from "../src/plain";
import { momma, fruit } from "../src/plain";

// This worked before installing rewire.
// import * as EvilImport from "../src/evilimport";
// EvilImport.bananas = function () { console.log("apples!"); }


describe("momma", () => {
  it("increases", () => {
    const result = momma(3);
    expect(result).toBe(6);
  });
});

describe("rewiring", () => {
  it("bypasses evilimport", () => {

    PlainModule.__Rewire__("getFruit", () => "apples");
    expect(fruit()).toEqual("apples");

    PlainModule.__ResetDependency__("getFruit");
    expect(fruit()).toEqual("bananas");

  });
});
