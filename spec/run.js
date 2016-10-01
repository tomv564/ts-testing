/* eslint-disable no-console, import/no-extraneous-dependencies */
import Jasmine from "jasmine";
// import SpecReporter from "jasmine-spec-reporter";

const runner = new Jasmine();
runner.loadConfigFile("spec/support/jasmine.json");
// runner.showColors(false);

function parseableStackFilter(stack) {
  var filteredStackLines = stack.split('\n').filter(function(stackLine) {
    return stackLine.indexOf(runner.jasmineCorePath) === -1;
  });
  if (filteredStackLines.length > 1) {
    var firstLine = filteredStackLines[0] + ' ' + filteredStackLines[1];
    if (filteredStackLines.length > 2) {
      return firstLine + '\n' + filteredStackLines.slice(2).join('\n');
    } else {
      return firstLine;
    }
  } else {
    return filteredStackLines.join('\n');
  }
}

runner.configureDefaultReporter({
  showColors: true,
  stackFilter: parseableStackFilter,
});

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
