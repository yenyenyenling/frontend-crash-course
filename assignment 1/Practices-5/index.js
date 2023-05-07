// 同一題會使用相同變數!!!!!!!!!
// 1.
// function isEven判斷是否是偶數
// function isEven(number) {
//     return number % 2 == 0;
// }
// console.log(isEven(78));

const isEven = number => number % 2 == 0;
console.log(isEven(20202));

// 2.
// isLeapYear
// function isLeapYear(year) {
//     return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
// }
// console.log(isLeapYear(2000));

const isLeapYear = year => (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
console.log(isLeapYear(19000));

// 3.
// 質數
// function isPrime(prime) {
//     for (let j = 2; j < prime; j++) {
//         if (prime % j === 0) {
//             return false;
//         }
//     }
//     return prime;
// }
// console.log(isPrime(77));

const isPrime = prime => {
    for (let j = 2; j < prime; j++) {
        if (prime % j === 0) {
            return false;
        }
    }
    return prime;
};
console.log(isPrime(77));

// 4.
// 傳入3數，比較誰最大
// function findMax(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         return 'num1是最大的數';
//     } else if (num2 > num1 && num2 > num3) {
//         return 'num2是最大的數';
//     } else if (num3 > num1 && num3 > num2) {
//         return 'num3是最大的數';
//     } else if (num1 == num2 && num2 != num3) {
//         return 'num1與num2是最大的數且數值相同';
//     } else if (num2 == num3 && num3 != num1) {
//         return 'num2與num3是最大的數且數值相同';
//     } else if (num3 == num1 && num1 != num2) {
//         return 'num1與num3是最大的數且數值相同';
//     } else {
//         return '此3數有相同的數值';
//     }
// }
// console.log(findMax(112, 112, 112));

const findMax = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        return 'num1是最大的數';
    } else if (num2 > num1 && num2 > num3) {
        return 'num2是最大的數';
    } else if (num3 > num1 && num3 > num2) {
        return 'num3是最大的數';
    } else if (num1 == num2 && num2 != num3) {
        return 'num1與num2是最大的數且數值相同';
    } else if (num2 == num3 && num3 != num1) {
        return 'num2與num3是最大的數且數值相同';
    } else if (num3 == num1 && num1 != num2) {
        return 'num1與num3是最大的數且數值相同';
    } else {
        return '此3數有相同的數值';
    }
};
console.log(findMax(112, 157, 162));
