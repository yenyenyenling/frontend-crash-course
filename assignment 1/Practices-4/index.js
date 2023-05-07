// 同一題會使用相同變數!!!!!!!!!
// 1.
// 1~10000
// for
// for (let num1 = 1; num1 <= 10000; num1++) {
//     console.log(num1);
// }
// while
// let num1 = 1;
// while (num1 <= 10000) {
//     console.log(num1);
//     num1++;
// }

// 2.
// 1~100 even
// for
// for (let num2 = 1; num2 <= 100; num2++) {
//     if (num2 % 2 == 0) {
//         console.log(num2);
//     }
//     num2++;
// }
// while
// let num2 = 1;
// while (num2 <= 100) {
//     if (num2 % 2 == 0) {
//         console.log(num2);
//     }
//     num2++;
// }

// 3.
// 1~100 odd
// for
// for (let num3 = 1; num3 <= 100; num3++) {
//     if (num3 % 2 != 0) {
//         console.log(num3);
//     }
// }
// while
// let num3 = 1;
// while (num3 <= 100) {
//     if (num3 % 2 != 0) {
//         console.log(num3);
//     }
//     num3++;
// }

// 4.
// 1~100 prime
// for
for (let i = 2; i <= 100; i++) {
    let prime = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            prime = false;
        }
    }
    if (prime) {
        console.log(i + '是質數!!!');
    }
}
// while
// 這個程式碼有幾個問題需要修正:
// 變數 prime 需要在每個內層循環之前設置為 true，否則如果第一個數不是質數，它就永遠不會被設置回 true，因此後面的所有數都不會被識別為質數。
// 內層循環結束後，需要將變數 j 重置為 2。否則，它會繼續遞增，導致下一個數的檢查錯誤。
// let i = 2;
// while (i <= 100) {
//     let j = 2;
//     let prime = true;
//     while (j < i) {
//         if (i % j == 0) {
//             prime = false;
//         }
//         j++;
//     }
//     if (prime) {
//         console.log(i + '是質數ㄚㄚㄚ');
//     }
//     i++;
// }

// 5.
// size大小的三角形
// for
// let count = 7;
// let star = '';
// for (let i = 1; i <= count; i++) {
//     for (let j = 1; j <= i; j++) {
//         star += '*';
//     }
//     star += '\n';
// }
// console.log(star);

// while
// let count = 3;
// let star = '';
// let i = 1;

// while (i <= count) {
//     let j = 1;
//     while (j <= i) {
//         star += '*';
//         j++;
//     }
//     star += '\n';
//     i++;
// }
// console.log(star);

// 6.
// 99乘法表
// for
// let table = 5;
// for (let row = 1; row <= table; row++) {
//     let ans = '';
//     for (let col = 1; col <= table; col++) {
//         let x = row * col;
//         // ans += x + '\t';  =>   ans = ans + (x + '\t');
//         ans += x + '\t';
//     }
//     console.log(ans);
// }

// while
// let table = 9;
// let row = 1;
// while (row <= table) {
//     let col = 1;
//     let ans = '';
//     while (col <= table) {
//         let x = row * col;
//         ans += x + '\t';
//         col++;
//     }
//     console.log(ans);
//     row++;
// }
