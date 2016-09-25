/// <reference path="../typings/index.d.ts" />
import {getGreeting} from "../src/hello";
import * as HelloModule from "../src/hello";
import {momma} from "../src/plain";
//function(): string { return "Hello"; }

describe("hello", () => {

	it("getGreeting", () => {
		// HelloModule.yo = function () :string { return "Hello"; }

		expect(getGreeting("Tom")).toBe("yo Tom");
	});

	it("momma", () => {
		expect(momma(1)).toBe(2);
	})
});