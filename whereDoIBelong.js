function getIndexToIns(arr, num) {
  let resultArr = arr.filter(el => num > el);
  return resultArr.length;
}

getIndexToIns([40, 60], 50);