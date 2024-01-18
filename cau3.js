function orderCharacters(inputString) {
    let letters = [];
    let numbers = [];
    let specials = [];
    for (let char of inputString) {
      if (/[a-zA-Z]/.test(char)) {
        letters.push(char); 
      } else if (/[0-9]/.test(char)) {
        numbers.push(char);
      } else {
        specials.push(char);
      }
    }
    let resultArray = letters.concat(numbers, specials);
    return resultArray;
}
  let userInput = prompt("nhap chuoi bat ki :");
  let result = orderCharacters(userInput);
  console.log(result);