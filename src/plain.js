import * as _ from "underscore";
import { tominate } from "tom";
import { getFruit } from "./evilimport";
import { name } from "tim";

const fun = _.debounce(() => console.log("yo"), 400);

export function momma(brother) {
  return brother * 2;
}

export function fruit() {
  return getFruit();
}
