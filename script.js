const num = 266219;

//const getMultiple = (num) =>
//num
//.toString()
//.split("")
//.reduce((res, item) => item * res, 1);

let ansMult = num
  .toString()
  .split("")
  .reduce((res, item) => item * res);

console.log(ansMult);
//a = getMultiple(num);
//a = a ** 3;
//console.log(a);

//a = getMultiple(num) ** 3;
ansMult = ansMult ** 3;
//a = a.toString().slice(0, 2);
console.log(ansMult.toString().slice(0, 2));
