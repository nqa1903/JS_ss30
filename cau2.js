function OddNumbers(n) {
    n = Math.floor(Math.abs(n));
    let sum = 0;
    let count = 0;
    for (let i = 1; i <= n; i += 2) {
      sum += i;
      count++;
      if (sum % 2 !== 0) {
        console.log(`Số lượng số: ${count}, Tổng: ${sum}`);
      }
    }
}
let userInput = prompt(" Nhap so tu nhien ");
let n = parseInt(userInput, 10);
OddNumbers(n);