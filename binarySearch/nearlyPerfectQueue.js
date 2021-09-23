var input = `1
7 40
10 3 40 20 80 70 90`;



var z = input.split("\n").map( i=> i.split(' ').map(Number) );

for(let t = 1; t<= z[0] ; t++){
   

    let [l , k] = z[t*2-1];
    let arr = z[t*2];
    let low = 0 ; 
    let high = l-1;
    

    //binary search method 

    function findEle(arr, low , high , key ){

        //if low is greater high 

        if(low <= high){

            let mid = low + Math.floor((high - low) / 2);

            if(arr[mid] == k) return mid;
            //edge in below case if mid is low or high the case will faill to avoid that we need to add the mid>low and mid<high condition 
            if(mid > low && arr[mid-1] == k ) return mid-1;
            if(arr[mid+1] == k && mid< high) return mid+1;


            if(key> arr[mid]){
                return findEle(arr, mid+2,high,key);
            }
                
            return findEle(arr,low, mid-2, key )
            



        }

        return "Not Found";



    }

    console.log(findEle(arr, low, high, k))

    

    //bruetforce appproch 

    //     for(let i in arr){ 
    //         if(arr[i] == k) {
    //             console.log(i) ;
    //             found = false;
    //             break;
    //         } 

    
    //     } 
    // if(found) console.log("Not found")  

}