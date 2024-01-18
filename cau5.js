function lastLetter(inputString) {
    let words = inputString.split(" ");
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (word.length > 0) {
        words[i] = word.slice(0, -1) + word.slice(-1).toUpperCase();
        } else {
        words[i] = word;
      }
    }
    return words.join(" ");
}
let userInput = prompt("nhap chuoi bat ki :");
let result = lastLetter(userInput);
console.log(result);