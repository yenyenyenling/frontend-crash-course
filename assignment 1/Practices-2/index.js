// 1.
// 滿18投票
let age = 18;
if (age < 18) {
    console.log('未成年不能投票喔(｡ŏ_ŏ)');
} else {
    console.log('要記得去投票嘿(ゝ∀･)b');
}

// 2.
// 檢查數值是否是奇數或偶數
let num = 77;
let ans = num % 2;
// 記得使用==
if (ans == 0) {
    console.log('你是偶數哦(❛◡❛✿)');
} else {
    console.log('你是奇數哦(❛◡❛✿)');
}

// 3.
// 定義2變數，比較大小
let x = 7;
let y = 'm';
if (x > y) {
    console.log('x大');
} else if (x < y) {
    console.log('y大');
} else if (x == y) {
    console.log('一樣大');
} else {
    console.log('輸入錯誤訊息');
}

// 4.
// 定義3變數，比較大小
// 由小到大排序
// a b   b c   a b
// let 是新定義變數的意思，不能再已有的變數再定義一次
let a = 111;
let b = 666;
let c = 222;
if (a > b) {
    let temp = a;
    a = b;
    b = temp;
}
if (b > c) {
    let temp = b;
    b = c;
    c = temp;
}
if (a > b) {
    let temp = a;
    a = b;
    b = temp;
}
console.log(a + ' ' + b + ' ' + c);

// 比較最大值
let num1 = 112;
let num2 = 321;
let num3 = 321;
if (num1 > num2 && num1 > num3) {
    console.log('num1是最大的數');
} else if (num2 > num1 && num2 > num3) {
    console.log('num2是最大的數');
} else if (num3 > num1 && num3 > num2) {
    console.log('num3是最大的數');
} else if (num1 == num2 && num2 != num3) {
    console.log('num1與num2是最大的數且數值相同');
} else if (num2 == num3 && num3 != num1) {
    console.log('num2與num3是最大的數且數值相同');
} else if (num3 == num1 && num1 != num2) {
    console.log('num1與num3是最大的數且數值相同');
} else {
    console.log('此3數有相同的數值');
}

// 5.
// 定義2變數為範圍,再定義另1變數確認是否在範圍內
let rang1 = 88;
let rang2 = 33;
let rang3 = 11;
if (rang1 > rang2) {
    let tt = rang1;
    rang1 = rang2;
    rang2 = tt;
}
if (rang3 >= rang1 && rang3 <= rang2) {
    console.log('恭喜你在範圍內( σ՞ਊ ՞)σ');
} else {
    console.log('你超出範圍了( σ՞ਊ ՞)σ');
}

// 6.
// 找出閏年
// 閏年的計算方式如下：
//
// 公元年份除以4不可整除，為平年。
// 公元年份除以4可整除但除以100不可整除，為閏年。
// 公元年份除以100可整除但除以400不可整除，為平年。
// 公元年份除以400可整除，為閏年。
//
// let year = 2000;
// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//     console.log('你就是閏年喔(☄◣ω◢)☄');
// } else {
//     console.log('ㄅㄑ你是平年(☄◣ω◢)☄');
// }
function isYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return '你就是閏年喔(☄◣ω◢)☄';
    } else {
        return 'ㄅㄑ你是平年(☄◣ω◢)☄';
    }
}
console.log(isYear(2000));
console.log(isYear(1900));
console.log(isYear(2023));
