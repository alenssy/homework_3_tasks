function mutation(arr) {
  let firstWordArr = arr[1].toLowerCase().split('');
  let secondWord = arr[0].toLowerCase();
  let result = firstWordArr.map(el => {
    if (secondWord.indexOf(el) < 0) return false;
  })
  return !result.includes(false)
}

mutation(["hello", "hey"]);