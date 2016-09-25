/// <reference path="../typings/index.d.ts" />
import {getGreeting} from "../src/hello";
import * as HelloModule from "../src/hello";

//function(): string { return "Hello"; }

describe("hello", () => {

	it("getGreeting", () => {
		// HelloModule.yo = function () :string { return "Hello"; }

		expect(getGreeting("Tom")).toBe("yo Tom");
	});

});