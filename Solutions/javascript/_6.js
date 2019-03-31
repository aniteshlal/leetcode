/*
    The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
    (you may want to display this pattern in a fixed font for better legibility)

    P   A   H   N
    A P L S I I G
    Y   I   R
    And then read line by line: "PAHNAPLSIIGYIR"

    Write the code that will take a string and make this conversion given a number of rows:

    string convert(string s, int numRows);
    
    Example 1:

    Input: s = "PAYPALISHIRING", numRows = 3
    Output: "PAHNAPLSIIGYIR"
    
    Example 2:

    Input: s = "PAYPALISHIRING", numRows = 4
    Output: "PINALSIGYAHRPI"
    Explanation:

    P     I    N
    A   L S  I G
    Y A   H R
    P     I

*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let arr = new Array(s.length)
    let ans = ""
    let currRow = 1, botmRow = numRows, topRow = 1
    let i = 0
    if(numRows == 1) return s;
    while(i < s.length){
        while(currRow < botmRow && i < s.length){
            arr[i] = currRow++;
            i++;
        }
        while( currRow > topRow && i < s.length ){
            arr[i] = currRow--;
            i++;
        }
    }
    
    i = 0, currRow = 1
    while(currRow <= botmRow){
        while(i < s.length){
            if(arr[i] == currRow){
                // console.log(s[i])
                ans = ans.concat(s[i])
            }
            i++;
        }
        i = 0;
        currRow++;
    }
    return ans
};