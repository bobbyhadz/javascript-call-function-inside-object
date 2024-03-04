// EXAMPLE 1 - Call a Function inside an Object in JavaScript

const obj = {
  sum(a, b) {
    return a + b;
  },
};

console.log(obj.sum(10, 10)); // 👉️ 20
console.log(obj.sum(10, 20)); // 👉️ 30

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using the `this` keyword to access the object's properties

// const obj = {
//   num: 100,
//   sum(a, b) {
//     return a + b + this.num;
//   },
// };

// console.log(obj.sum(1, 1)); // 👉️ 102
