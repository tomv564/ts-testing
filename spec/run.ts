/// <reference path="../typings/index.d.ts" />

var Jasmine: any = require("jasmine");
var runner = new Jasmine();
runner.loadConfigFile('spec/support/jasmineTS.json')

runner.env.clearReporters();
var SpecReporter = require('jasmine-spec-reporter');
runner.addReporter(new SpecReporter());

var regex = /.spec.ts$/

var spec_arg = process.argv.length > 2 && regex.test(process.argv[2]) ? process.argv[2] : null

if (spec_arg) {
	var relative_path = spec_arg.replace(process.cwd(), "");
	console.log("Running spec", relative_path);
	runner.execute([relative_path]);
} else {
	console.log("Running all JS specs");
	runner.execute();
}