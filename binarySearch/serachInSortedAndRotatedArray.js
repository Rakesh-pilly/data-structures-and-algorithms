// Search in sorted and rotated array -10225:53:1
// Description

// Given a sorted(increasing order) array of length n and is rotated by some value beforehand. Find the index of the target element  K in the rotated array in O(logn) time. If not found print -1.

// input = 5 1 // 3 4 5 1 2


// --------------------bruteforces approches --------------------


var [val, arr] = input.split("\n").map(i => i.split(" ").map(Number));

let [l, k] = val;



function shiftedArrSearch(shiftArr, num){
     let pivot = findPivotPoint(shiftArr)

    if(pivot == 0 || num < shiftArr[0]){
        return binarySearch(shiftArr, pivot, shiftArr.length - 1, num)
    }
    
    return binarySearch(shiftArr, 0, pivot - 1, num)

}
function findPivotPoint(arr){
  let begin = 0
  let end = arr.length - 1

    while (begin <= end):
        mid = begin + floor((end - begin)/2)
        if (mid == 0 OR arr[mid] < arr[mid-1]):
            return mid
        if (arr[mid] > arr[0]):
            begin = mid + 1
        else:
            end = mid - 1

    return 0
}

function binarySearch(arr, begin, end, num):
    while (begin <= end):
        mid = begin + floor((end - begin)/2)
        if (arr[mid] < num):
            begin = mid + 1
        else if (arr[mid] == num):
            return mid
        else:
            end = mid - 1

    return -1