/*
    Given two integers dividend and divisor, divide two integers without using multiplication, 
    division and mod operator.

    Return the quotient after dividing dividend by divisor.

    The integer division should truncate toward zero.

    Example 1:

    Input: dividend = 10, divisor = 3
    Output: 3
    Example 2:

    Input: dividend = 7, divisor = -3
    Output: -2
    
    Note:

    Both dividend and divisor will be 32-bit signed integers.
    The divisor will never be 0.
    Assume we are dealing with an environment which could only store integers within the 
    32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume 
    that your function returns 231 − 1 when the division result overflows.
*/

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    var MIN_INT = 1 << 31
    var MAX_INT = Math.pow(2,31)-1
    var sign = ((dividend < 0) ^ (divisor < 0)) ? -1 : 1
    // console.log(MIN_INT == dividend)
    if(divisor == 0) return "cannot divide by zero error"
    if(divisor==-1 && dividend == MIN_INT) return MAX_INT
    if(divisor == 1) return dividend
    if(divisor == -1) return -dividend
    if(dividend == divisor) return sign
    if(dividend > 0) dividend = -dividend
    if(divisor > 0) divisor = -divisor
    var num = dividend
    var den = divisor
    var rem = num
    var ans = 0
    var bit_count = 0
    while(rem <= divisor){
        //console.log(rem + " " + den)
        if(den > 0 || den <= rem){
            den = divisor << (bit_count-1)
            rem = rem - den
            den = divisor
            ans += 1 << (bit_count-1)
            bit_count = 0
        }else{
            den = den << 1
            bit_count++
        }
        
    }
    
    return sign > 0 ? ans : -ans
    
};