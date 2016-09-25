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
hijack using Javascript TS.sublime-syntax
View -> Syntax -> Open all with current extension


### Jasmine es6 for babel 6: 

https://gist.github.com/mauvm/172878a9646095d03fd7
