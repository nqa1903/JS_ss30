function isPrime(number) {
    if (number <= 1) {
      return false; 
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false; 
      }
    }
    return true; 
}
let input = prompt("Nhap them phan tu vao mang (cach nhau boi dau phay): ");
let array = input.split(",");
for (let i = 0; i < array.length; i++) {
    array[i] = parseFloat(array[i]);
}
for (let num of arr){
    if (isPrime(num)) { 
      console.log(num);
    }
}