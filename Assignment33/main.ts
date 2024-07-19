let array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

array.forEach((num) => {
  if (num == array[0]) {
    console.log(`${num}st`);
  } else if (num == array[1]) {
    console.log(`${num}nd`);
  } else if (num == array[2]) {
    console.log(`${num}rd`);
  } else if (
    num == array[3] ||
    num == array[4] ||
    num == array[5] ||
    num == array[6] ||
    num == array[7] ||
    num == array[8]
  ) {
    console.log(`${num}th`);
  }
});


// Assignment complete