// Bubble Sort

function swap(array, x, y) {
  var temp = array[x];
  array[x] = array[y];
  array[y] = temp;
}

function bubbleSort(array, n) {
  var i, j;
  for (i = 0; i < n - 1; i++) {
    for (j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
}

function printArray(array, size) {
  var i;
  for (i = 0; i < size; i++) {
    console.log(array[i] + " ");
  }
}

var array = [100, 92, 55, 78, 33, 45, 76, 32, 47, 54, 10];
var n = 11;

console.log("unsorted array: ");
printArray(array, n);

bubbleSort(array, n);
console.log("sorted array: ");
printArray(array, n);
