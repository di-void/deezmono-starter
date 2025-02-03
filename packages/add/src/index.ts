import { foo } from "./utils";

export function add(a: number, b: number) {
  console.log("Foo", foo);
  return a + b;
}

export function bar() {
  return "some battles";
}
