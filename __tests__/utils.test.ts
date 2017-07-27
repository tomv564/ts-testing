/// <reference path="../typings/index.d.ts" />
import {yo} from "../src/utils";
// import {momma} from "../src/plain";

describe("utils", () => {

    it("yo", () => {
        // HelloModule.yo = function () :string { return "Hello"; }

        expect(yo()).toBe("yo");
       	debugger;
    });

    // it("momma", () => {
    //     expect(momma(1)).toBe(2);
    // });
});