function split(wholeArray) {
  const firstHalf = wholeArray.slice(0, Math.floor(wholeArray.length / 2));
  const secondHalf = wholeArray.slice(Math.floor(wholeArray.length / 2));
  console.log('SPLIT', firstHalf, secondHalf);
  return [firstHalf, secondHalf];
}

function merge(arr) {
  arr[0].sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  arr[1].sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  console.log(arr);

  const joinedArr = arr[0].concat(arr[1]);

  joinedArr.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  return joinedArr;
}

function mergeSort(arr) {
  const splitArr = split(arr);
  return merge(splitArr);
}
