// Everything related to Binary Search -10249:48:9
// Description

// Given a sorted array with repeating integers. You need to find the first occurence , last occurence and count of a given key in the array. USE ONLY BINARY SEARCH. Your algorithm should run in LogN time.If element is not present print -1 -1 0.


// Input

//link for the problem https://oj.masaischool.com/contest/1794/problem/7-BS1



var input = `10
1 1 2 2 3 3 4 4 5 5
4`;


var [l, arr, k] = input.split("\n").map(i => i.split(" ").map(Number));


//let find the lower bond of the first

function find_lower_bond(arr , l, k){
    let low = 0;
    let high = l-1 ;
    let res = -1;
    res
    while(low <= high){
    
        let mid = low + Math.floor((high - low)/2);
    
        if(arr[mid] == k){
    
            res = mid;
    
            high = mid -1;
    
    
        } else if(arr[mid]> k){
    
            high = mid-1;
        } else{
            low = mid+1;
        }
    
    }

    res

    return res
}

function find_higher_bond(arr , l, k){
    let low = 0;
    let high = l-1 ;
    let res = -1;
    
    while(low <= high){
    
        let mid = low + Math.floor((high - low)/2);
    
        if(arr[mid] == k){
    
            res = mid;
    
            low = mid +1;
    
    
        } else if(arr[mid]> k){
    
            high = mid-1;
        } else{
            low = mid+1;
        }
    
    }

    return res


}
let [x,y] = [find_lower_bond(arr,l, k), find_higher_bond(arr,l,k)]

console.log(x, y, y-x+1)






//---------bruteforces -- lon n approch 


let out = [-1,-1,0]


for(let i in arr) {

    if(arr[i] == k ){

        out[2]++;

        if(out[0] == -1){
           out[0] = i;
        }

    }
    
}

for(let i = arr.length - 1; i >= 0; i--){

    if(arr[i] == k ){

        out[1] = i;
        break;
    }
}

console.log(out.join(" "))