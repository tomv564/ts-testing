/// <reference path="../typings/index.d.ts" />

const Jasmine: any = require("jasmine");
const runner = new Jasmine();
runner.loadConfigFile("spec/support/jasmineTS.json");

runner.env.clearReporters();
const SpecReporter = require("jasmine-spec-reporter");
runner.addReporter(new SpecReporter());

const regex = /.spec.ts$/;

const spec_arg = process.argv.length > 2 && regex.test(process.argv[2]) ? process.argv[2] : null;

if (spec_arg) {
    const relative_path = spec_arg.replace(process.cwd(), "");
    console.log("Running spec", relative_path);
    runner.execute([relative_path]);
} else {
    console.log("Running all JS specs");
    runner.execute();
}