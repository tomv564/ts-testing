Ts notes:

Upgrade ts 
npm upgrade -g typescript

In Sublime preferences, set 
"typescript_tsdk": "/usr/local/lib/node_modules/typescript/lib"

add compiler settings
"strictNullChecks": true

Typescript: show error list

Typescript: find references
ctrl t+r
open: enter on line or add dbl-click support from https://github.com/Microsoft/TypeScript-Sublime-Plugin/pull/509

Add to Context.sublime-menu
```
[{
    "command": "typescript_find_references",
    "caption": "Find References"
}]
```

go to definition:
super+option+down on mac
f12

default go to definition click:

https://gist.github.com/kendellfab/6135193

jump to matching bracket
ctrl+m

jump back:
alt+- or ctrl+- , add shift to jump forward.

mouse setup:
```
[
    {
        "button": "button1",
        "count": 1,
        "modifiers": ["super"],
        "press_command": "drag_select",
        "command": "goto_definition"
    },
     // TypeScript
    {
        "button": "button1",
        "count": 1,
        "modifiers": ["super"],
        "press_command": "drag_select",
        "command": "typescript_go_to_definition",
        "context": [
             { "key": "selector", "operator": "equal", "operand": "source.ts, source.tsx" }
        ]
    },
    {
        "button": "button3",
        "count": 1,
        "modifiers": [],
        "command": "jump_back"
    }
]
```

### TS support

jsconfig
DONT hijack using Javascript TS.sublime-syntax
View -> Syntax -> Open all with current extension

### Jasmine es6 for babel 6: 

https://gist.github.com/mauvm/172878a9646095d03fd7

Autocomplete shoudl be added to js syntax:

    "auto_complete_triggers": [ {"selector": "source.js", "characters": "."} ]

To access ConsoleReporters stackFilter, need to make sure it doesn't call configureDefaultReporter in execute.
pin to jasmine (jasmine-npm ) 2.4.1

Need a good Require / import helper

Set up Tslint path in global SublimeLinter settings
paths, windows: `/Users/tvanommeren/Projects/asdf/node_modules/.bin`

Install DocBlockr
https://packagecontrol.io/packages/DocBlockr

### Jest, inspector etc.

Need:
inspect-process to automate launching chrome
jest-environment-node-debug to make sure no special vm is created to run specs in
see: https://github.com/facebook/jest/issues/1652

There was also some business about TS source maps (try inline per-file)