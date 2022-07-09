// Ternery Search Algorithm

function ternarySeach(left, right, key, array) {
  if (right >= left) {
    let mid1 = left + parseInt((right - left) / 3, 10);
    let mid2 = right - parseInt((right - left) / 3, 10);

    if (array[mid1] == key) {
      return mid1;
    }

    if (array[mid2] == key) {
      return mid2;
    }

    if (key < array[mid1]) {
      return ternarySeach(left, mid1 - 1, key, array);
    } else if (key > array[mid2]) {
      return ternarySeach(mid2 + left, right, key, array);
    } else {
      return ternarySeach(mid1 + 1, mid2 - 1, key, array);
    }
  }

  return -1;
}

let left, right, p, key;
// array values
let array = [10, 20, 30, 33, 37, 42, 55, 57, 69];

// start of the array index
left = 0;
// length of the array
right = 8;
// search value
key = 55;
// seach the key using ternarySearch
p = ternarySeach(left, right, key, array);
// log the output
console.log("Indes of " + key + " is " + p);
