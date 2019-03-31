/**
    Given a string, find the length of the longest substring without repeating characters.

    Example 1:

    Input: "abcabcbb"
    Output: 3 
    Explanation: The answer is "abc", with the length of 3. 
    
    Example 2:

    Input: "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.
    
    Example 3:

    Input: "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3. 
    Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0, end = 0, longest = 0;
    var myMap = new Map();
    
    while(start < s.length && end < s.length){
        if(!myMap.has(s[end])){
            myMap.set(s[end])
            end++;
            if(end-start > longest){
                longest = end-start
            }else if(s.length-start < longest) return longest;
        }else{
            myMap.delete(s[start])
            var index = s.indexOf(s[start], start+1);
            start++;
            if(index > -1 && index < start) 
                start = index +1;
        }
    }
    return longest;
};