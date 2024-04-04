let numbers = [1, 3, 5, 2, 4, 6, 7, 8, 9, 10, 5, 3, 2, 1, 4, 6, 7, 8, 9, 10];
function sortInt(a, b) {
  let i = 0;
  i++;

  console.log(`count ${i}`);
  console.log(`${(a, b)}`);
  return a - b;
}
console.log(numbers.sort(sortInt));

// Bubble sort
// Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the
// list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller elements "bubble" to the top of the list. Although the algorithm
// is simple, it is too slow and impractical for most problems even when compared to insertion sort. It can be practical if the input is usually in sort order but may occasionally

function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      // console.log(arr[j] > arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
    // console.log(`pass ${i}`);
  }
  return arr;
}
// console.log(bubbleSort(numbers));

// Selection sort
// Selection sort is an in-place comparison sorting algorithm that divides the input list into two parts: a sorted sublist of items which is built up from left to right at the front
// of the list and a sublist of the remaining unsorted items that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list.
// The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging it with the leftmost unsorted element (putting it
// in sorted order), and moving the sublist boundaries one element to the right.

function selectionSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
    }
    // console.log(`pass ${i}`);
  }
  return arr;
}

console.log(selectionSort(numbers));
