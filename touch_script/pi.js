const add = (x, y) => x + y;
const pi = 3.14567;
const square = x => x * x;
module.exports.add = add;
module.exports.pi = pi;
module.exports.square = square;

console.log(add(2, 3));       // 5
console.log(pi);              // 3.14
console.log(square(4));       // 16

// module.exports = {
//   add,
//   pi,
//   square,
// };