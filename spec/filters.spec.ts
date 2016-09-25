/// <reference path="../typings/index.d.ts" />
import {isOn} from "../src/filters";

describe("filters", () => {

	it("isOn recognizes on", () => {
		expect(isOn("on")).toBe(true);
		expect(isOn(undefined)).toBe(false);
		expect(isOn("off")).toBe(false);
	});

});