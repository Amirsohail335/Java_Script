function linearSearch(arr, x){
    for(let i = 0; i < arr.length; i++){
        if (arr[i]== x) {
            return x;
            
        }
    }
    return NaN;
}


function binarySearch(arr, x){

}

module.exports = {
    linear : linearSearch,
    binary : binarySearch
}