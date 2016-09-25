import Jasmine from 'jasmine'

var jasmine = new Jasmine()
jasmine.loadConfigFile('spec/support/jasmine.json')

// TODO: support passing in parameter.
// jasmine.execute(['fooSpec.js'], 'a spec name');
jasmine.execute()
