type UserId = number | string;

function getTicketInfo(id: string | number) {
  if (typeof id === "string") {
    return `Find ticket by ID: ${id.toUpperCase()}`;
  } else {
    return `Find ticket by ID: ${id.toFixed(0)}`;
  }
}

getTicketInfo(123);

let mixedArray: (string | number)[] = [1, 2, "three", "four"];

mixedArray.push(5);
// Error: Type 'false' is not assignable to type 'string | number'
// mixedArray.push(false); 