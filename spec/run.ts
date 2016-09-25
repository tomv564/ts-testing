/// <reference path="../typings/index.d.ts" />

var Jasmine: any = require("jasmine");
var runner = new Jasmine();
runner.loadConfigFile('spec/support/jasmineTS.json')

// TODO: support passing in parameter.
// jasmine.execute(['fooSpec.js'], 'a spec name');
runner.execute()
