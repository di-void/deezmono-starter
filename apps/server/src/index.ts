import { add, bar } from "@acme/add";
import { minus } from "@acme/add/lib";

function main() {
  const res = add(1, 2);
  const bars = bar();
  const mRes = minus(2, 1);

  console.log("Result:", res);
  console.log("Result:", mRes);
  console.log("Result:", bars);
}

main();
