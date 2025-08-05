import { addTimes } from "@acme/add";
import { minus } from "@acme/add/lib";

function main() {
  const addResult = addTimes(1, 2);
  const minusResult = minus(2, 1);

  console.log("Add Reusult:", addResult);
  console.log("Minus Reusult:", minusResult);
}

main();
