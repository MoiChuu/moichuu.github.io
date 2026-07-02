// counter.js

// 計日器
var now = new Date();
var spday = new Date(2026, 2 - 1, 1); // 這裡請自行修改你的年月日
var a = (now.getTime() - spday.getTime()) / (24 * 60 * 60 * 1000);
a = Math.ceil(a);

// 使用現代且安全的寫法把天數放進網頁中
document.getElementById("day-count").innerHTML = a;