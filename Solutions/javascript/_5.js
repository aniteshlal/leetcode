 /**
    Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

    Example 1:

    Input: "babad"
    Output: "bab"
    Note: "aba" is also a valid answer.
    
    Example 2:

    Input: "cbbd"
    Output: "bb"
  */

 /**
 * @param {string} s 
 * @param {number} start 
 * @param {number} end 
 */
function isPalindrome(s,start,end){
      while (start < end){
          if(s[start++] != s[end--]) return false
      }
      return true;
  }
  
  /**
   * @param {string} s
   * @return {string}
   */
  
  var longestPalindrome = function(s) {
      let start = 0, end = 0, result = ""
      let temp = ""
      let k;
      while(start < s.length){
          while(end < s.length){
              temp = s.substring(start, end)
              if(isPalindrome(s,start,end)){
                  if(temp.length >= result.length){
                      result = s.substring(start,end+1)
                  }
              }
              end++
          }
          start++;
          end = start + result.length-1;
      }
      return result;
  };