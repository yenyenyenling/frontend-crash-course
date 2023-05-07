// 1.
// +
let z = 7 + 2;
console.log(z);

// -
let y = 40 - 21 - 22;
console.log(y);

// '*'
let x = 5 * 5;
console.log(x);

// '/'
let w = 17 / 21;
console.log(w);

// %
let v = 3 % 5;
console.log(v);

// ++
let u = 17;
u++;
console.log(u);

// --
let t = 88;
t--;
console.log(t);

// 2.
let a = 1;
let b = 2;
let c = 3;
// +
let d = a + b + c;
console.log('a+b+c=' + d);
// -
let e = c - b - a;
console.log('c-b-a=' + e);
// '*'
let f = a * b;
console.log('a*b=' + f);
// '/'
let g = a / b;
console.log('a/b=' + g);
// %
let h = a % b;
console.log('c%b=' + h);
// ++
let i = a;
i++;
console.log('a++=' + i);
// --
let j = c;
j--;
console.log('c--=' + j);
//若是
// let i = a++;
// console.log(i);
// 這段程式碼的執行結果會是1。
// 這段程式碼會先把變數a的值賦給變數i，也就是1。
// 然後，a會遞增1，變成了2。因此，變數i的值是a遞增之前的值，也就是1。

// 3.
let num1 = 5;
let num2 = 8;
let num3 = 4;
let num4 = '8';
let num5 = 7;

// ==
console.log(num2 == num4);

// /!=
console.log(num2 != num4);

// ===
console.log(num2 === num4);

// /!==
console.log(num2 !== num4);

// >
console.log(num4 > num5);

// <
console.log(num1 < num3);

// >=
console.log(num5 >= num4);

// <=
console.log(num3 <= num1);

// 4.
let log1 = 4;
let log2 = 1;
let log3 = 8;

// &&
console.log(log3 > log1 && log1 > log2);

// ||
console.log(log3 < log2 || log1 < log2);

// /!
console.log(!(log3 > log2));
