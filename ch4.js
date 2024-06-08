///Q1///
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
let year = parseInt(prompt("請輸入年份："));
console.log(isLeapYear(year));
///Q2///
function daysInMonth(month) {
    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            return "31 天";
        case 4: case 6: case 9: case 11:
            return "30 天";
        case 2:
            return "28 或 29 天";
        default:
            return "無效的月份";
    }
}
let month = parseInt(prompt("請輸入月份："));
console.log(daysInMonth(month));
///Q3///
let inputStr = prompt("請輸入一個字串：");
let reversedStr = "";
for (let i = inputStr.length - 1; i >= 0; i--) {
    reversedStr += inputStr[i];
}
console.log(reversedStr);
///Q4///
let rows = 5;
for (let i = rows; i > 0; i--) {
    console.log('*'.repeat(i));
}
///Q5///
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}
let number = parseInt(prompt("請輸入一個數字："));
console.log(isPrime(number));
///Q6///
let rows = 5;
let i = rows;
while (i > 0) {
    console.log('*'.repeat(i));
    i--;
}
///Q7///
function factorial(n) {
    let result = 1;
    let i = 1;
    do {
        result *= i;
        i++;
    } while (i <= n);
    return result;
}
let num = parseInt(prompt("請輸入一個正整數："));
console.log(factorial(num));
///Q8///
let arr = [1, 5, 2, 7, 3];
let max = arr[0];
for (let value of arr) {
    if (value > max) {
        max = value;
    }
}
console.log(max);
///Q9///
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let sum = 0;
for (let value of arr) {
    if (value % 2 === 0) {
        sum += value;
    }
}
console.log(sum);
///Q10///
let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let sum = 0;
for (let key in obj) {
    sum += obj[key];
}
console.log(sum);