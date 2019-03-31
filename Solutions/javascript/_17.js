/**
    Given a string containing digits from 2-9 inclusive, return all possible letter 
    combinations that the number could represent.

    A mapping of digit to letters (just like on the telephone buttons) is given below. 
    Note that 1 does not map to any letters.



    Example:

    Input: "23"
    Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
    Note:

    Although the above answer is in lexicographical order, your answer could be in any order you want.
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length == 0) return []
    var keypad = new Map()
    keypad.set('2', ['a','b','c'])
    keypad.set('3', ['d','e','f'])
    keypad.set('4', ['g','h','i'])
    keypad.set('5', ['j','k','l'])
    keypad.set('6', ['m','n','o'])
    keypad.set('7', ['p','q','r', 's'])
    keypad.set('8', ['t','u','v'])
    keypad.set('9', ['w','x','y', 'z'])
    var ans = ['']
    var combine = function(a,b){
        var combinations = []
        for(let i = 0; i < a.length; i++){
            for(let j = 0; j < b.length;j++){
                combinations.push(a[i]+b[j])
            }
        }
        return combinations
    }
    // console.log(combine([''],['a','b','c']))
    for(let i = 0; i < digits.length; i++){
        ans = combine(ans,keypad.get(digits[i]))
    }
    return ans
};