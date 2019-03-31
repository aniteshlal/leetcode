/**
    Given an array nums of n integers and an integer target, find three integers in nums 
    such that the sum is closest to target. Return the sum of the three integers. You may 
    assume that each input would have exactly one solution.

    Example:

    Given array nums = [-1, 2, 1, -4], and target = 1.

    The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var ans
    var dist = Number.MAX_SAFE_INTEGER
    var finalAns
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            for(let k = j+1; k<nums.length; k++){
                ans = nums[i] + nums[j] + nums[k]
                if(ans == target) return ans
                if(dist > Math.abs(target-ans) ){
                    finalAns = ans
                    dist = Math.abs(target-ans)
                }
            }
        }
    }
    return finalAns
};