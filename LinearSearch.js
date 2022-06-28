// Linear Search 
// going through loop one at a time 

function LinearSearch(array, value){
    // going the array one by one 
    for (var i = 0; i < array.length; i++){
        if(array[i] === value){
            console.log(i);
            return i;
        }
    }

    // if the value looking for does not exits then return null 
    return null;
}
const NumberArray = [11,24,36,43,57,62,77,89,98]; 
LinearSearch(NumberArray,57);
