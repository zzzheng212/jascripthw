///Q1///
function fibonacci(n) {
    if (n === 1 || n === 2) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
let n = parseInt(prompt("請輸入一個正整數："));
console.log(`費氏數列第 ${n} 項是：${fibonacci(n)}`);
///Q2///
function GCD(m, n) {
    if (m % n === 0) {
        return n;
    } else {
        return GCD(n, m % n);
    }
}
let m = parseInt(prompt("請輸入第一個正整數："));
let n = parseInt(prompt("請輸入第二個正整數："));
console.log(`最大公因數是：${GCD(m, n)}`);
