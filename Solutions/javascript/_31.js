/*
    Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

    If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

    The replacement must be in-place and use only constant extra memory.

    Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

    1,2,3 → 1,3,2
    3,2,1 → 1,2,3
    1,1,5 → 1,5,1
*/

/**
 * @param {number[]} nums
 * @param {number} a 1st index of nums to swap
 * @param {number} b 2nd index of nums to swap
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var swap = function(nums, a, b){
    var temp = nums[a]
    nums[a]= nums[b]
    nums[b]= temp
}

/**
 * 
 * @param {number[]} nums 
 * @param {number} i 
 */
var reverse = function(nums, i){
    var j = nums.length-1
        while(i < j){
            swap(nums,i++,j--)
        }
}
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if(nums.length <= 1) return
    var i = nums.length - 2;
    while (i >= 0 && nums[i + 1] <= nums[i]) {
        i--;
    }
    if (i >= 0) {
        var j = nums.length - 1;
        while (j > i && nums[j] <= nums[i]) {
            j--;
        }
        swap(nums, i, j);
    }
    reverse(nums, i + 1);
};