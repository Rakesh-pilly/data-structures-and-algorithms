// Search in sorted and rotated array -10225:53:1
// Description

// Given a sorted(increasing order) array of length n and is rotated by some value beforehand. Find the index of the target element  K in the rotated array in O(logn) time. If not found print -1.

// input = 5 1
// 3 4 5 1 2


// --------------------bruteforces approches --------------------


var [val, arr] = input.split("\n").map(i => i.split(" ").map(Number));

let [l, k] = val;

let res = -1;
  
  for(let i in arr) {if(arr[i] == Number(k)) res = i};
   
  console.log(res)