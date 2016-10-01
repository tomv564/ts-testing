/* eslint-disable no-console, import/no-extraneous-dependencies */
import Jasmine from "jasmine";
import SpecReporter from "jasmine-spec-reporter";

const runner = new Jasmine();
runner.loadConfigFile("spec/support/jasmine.json");

runner.env.clearReporters();
runner.addReporter(new SpecReporter());

const regex = /.spec.js$/;
const specArgument = process.argv.length > 2 && regex.test(process.argv[2]) ?
                      process.argv[2] :
                      null;

if (specArgument) {
  const specPath = specArgument.replace(process.cwd(), "");
  console.log("Running spec", specPath);
  runner.execute([specPath]);
} else {
  console.log("Running all JS specs");
  runner.execute();
}
