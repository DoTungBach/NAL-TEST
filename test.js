function countVietnameseCharacters(inputString) {
  let format = /^[A-Za-z0-9]*$/;
  let str = inputString.toLowerCase().trim();
  if (!str.match(format)) {
    return "not validate";
  }
  let arr = str.split("");
  let result = [];
  let count = 0;
  const vietnameseCharacters = ["aa", "aw", "dd", "ee", "oo", "ow", "uw", "w"];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "w") {
      if (arr[i - 1] == "a" || arr[i - 1] == "o" || arr[i - 1] == "u") {
        continue;
      }
      count++;
      result.push(arr[i]);
    } else {
      for (let j = 0; j < vietnameseCharacters.length; j++) {
        if (arr[i] + arr[i + 1] == vietnameseCharacters[j]) {
          count++;
          result.push(arr[i] + arr[i + 1]);
        }
      }
    }
  }

  return `${count} (${result.join(",")}) `;
}
console.log(countVietnameseCharacters("hfdawhwhcoomddwaw")); //6 (aw,w,oo,dd,w,aw)
console.log(countVietnameseCharacters("hfdawhwhcoomdd")); //4 (aw,w,oo,dd)
console.log(countVietnameseCharacters("aksdjfqqoiwuwhfrfawwfeihfk")); //4 (w,uw,aw,w)
