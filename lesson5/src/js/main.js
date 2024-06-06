
// let nums = [1, 3, 4, 2, 2];
// let setNums = new Set(nums);
// console.log(setNums);

let nums1 = [1, 3, 4, 2, 2];
let FilterNums = nums1.filter((num, i, arr) => {
    return arr.indexOf(num) !== i;
})
console.log(FilterNums)

let nums2 = [3, 1, 3, 4, 2];

let FindNums = nums2.find((num, i, arr) => arr.indexOf(num) !==i);
console.log(FindNums);

let nums3 = [3, 3, 3, 3, 3];

let FindNums2 = nums3.find((num, i, arr) => arr.indexOf(num) !==i);
console.log(FindNums2);


let nums4 = [1, 3, 4, 2, 2];

for (let i = 0; i < nums4.length; i++) {
    for (let p = i + 1; p < nums4.length; p++){
        if (nums4[i] === nums4[p]) {
            console.log(nums4[i]);
        }
    }
    
}
