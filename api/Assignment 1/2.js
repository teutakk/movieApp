// Given two arrays of integers. Add up each element in the same position and
// create a new array containing the sum of each pair. Assume both arrays are of the same length.
// must use for loop

let arr_1 = [4, 6, 7];
let arr_2 = [8, 1, 9];

let arr3 = []
for(let i = 0;i<arr_1.length; i++){
    let rez= arr_1[i]+arr_2[i]
    arr3.push(rez)

}console.log(arr3);
