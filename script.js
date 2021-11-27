const num = 266219;

let ansMult = num
  .toString()
  .split("")
  .reduce((res, item) => item * res);

console.log(ansMult);

ansMult = ansMult ** 3;

console.log(ansMult.toString().slice(0, 2));
