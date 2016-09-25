import {yo} from "./utils";
import {momma} from "./plain";
import {isOn} from "./filters";

export {yo} from "./utils";

export function greet(msg: string) {
	console.log(msg.toUpperCase());
	if (isOn("off")) {
		console.log("nevermind" + yo());
		let brothers = momma(2);
	}
}

export function getGreeting(name: string) :string {
	return yo() + " " + name;
}

