// whole-script strict mode syntax
// javascript is very flexible
// flexible === dangerous
// added ECMAScript 5

"use strict";
// 2. variable
// let (added in ES6)
let globalName = "global name";
{
  let name = "ellie";
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);
console.log(name);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
// 선언된 위치를 무시하고 무조건 위에서, 아무대서나 선언되기 때문
