import {yo} from "./utils";
import {momma} from "./plain";
import {isOn} from "./filters";

export {yo} from "./utils";

let pants = "";

greet("hello");

// let translated = pants
export function greet(msg: string) {
    console.log(msg.toUpperCase());
    if (isOn("on")) {
        console.log("nevermind" + yo());
        let brothers = momma(2);
    }
}

export function getGreeting(name: string): string {
    return yo() + " " + name;
}

