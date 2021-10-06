var arr = ['a', 'b', 'c'];


function comb(arr){

    if(arr.length == 0) return [ [] ];

    let firstEl = arr[0];
    let restEl = arr.slice(1);

    const combWithOutFirst = comb(restEl);
    const combWithFirst = [];
    
    combWithOutFirst.forEach(comb=> {

        const combsWithFirst = [...comb, firstEl];

        combWithFirst.push(combsWithFirst);

    })


    return [ ...combWithOutFirst, ...combWithFirst];
}


console.log(comb(arr));