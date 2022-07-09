// Binary Search
// Searching from a sorted data

function binarySearch(array, left, right, x) {
  if (right >= left) {
    let middle = left + Math.floor((right - left) / 2);

    // If the element is present at the middle
    // itself
    if (array[middle] == x) return middle;

    // If element is smaller than mid, then
    // it can only be present in left subarray
    if (array[middle] > x) return binarySearch(array, left, middle - 1, x);

    // Else the element can only be present
    // in right subarray
    return binarySearch(array, middle + 1, right, x);
  }

  // We reach here when element is not
  // present in array
  return -1;
}

let array = [2, 5, 8, 10, 30, 32, 37, 43];
let x = 32;
let length = array.length;
let result = binarySearch(array, 0, length - 1, x);
result == -1
  ? console.log("Element is not present in array")
  : console.log("Element is present at index " + result);
