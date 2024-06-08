///Q1///
function daysFromToday(dateString) {
    let inputDate = new Date(dateString);
    let today = new Date();
    let timeDifference = today - inputDate;
    let dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return dayDifference;
}
let dateInput = prompt("請輸入日期（格式：YYYY-MM-DD）：");
console.log(`距離現在的天數是：${daysFromToday(dateInput)}`);
///Q2///
function reverseString(str) {
    return str.split("").reverse().join("");
}
let inputStr = prompt("請輸入一個字串：");
console.log(`反轉後的字串是：${reverseString(inputStr)}`);
///Q3///
function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
let palindromeInput = prompt("請輸入一個字串：");
console.log(`該字串是否為迴文：${isPalindrome(palindromeInput)}`);
