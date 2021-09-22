// Upper Bound in LogN -10249:43:19
// Description

// You are given n different numbers and an integer k. Write a program that finds upper bound of k in log(n) time complexity. Upper bound of a number k in a sorted list is the index of the first number which is greater than k (here the answer is given considering index to be starting from 0)

//https://oj.masaischool.com/contest/1794/problem/7-BS4
// 10 3
// 0 2 4 4 5 5 7 7 9 10

    let [val, arr] = input.split("\n").map(i => i.split(' ').map(Number));
  
  let [l, k] = val;
  
  //bruteforcee------appprocch 
  let res = -1;
  let max = -1;
  
  for(let i in arr){
      
      
      if(arr[i] <= k){
  
          if(arr[i] >= max){
              max = arr[i];
              res = i
          }
      }
  }
  
  console.log(Number(res)+1);
  
     

