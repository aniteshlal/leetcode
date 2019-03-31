/*
    Implement atoi which converts a string to an integer.

    The function first discards as many whitespace characters as necessary until the first 
    non-whitespace character is found. Then, starting from this character, takes an optional 
    initial plus or minus sign followed by as many numerical digits as possible, and 
    interprets them as a numerical value.

    The string can contain additional characters after those that form the integral number, 
    which are ignored and have no effect on the behavior of this function.

    If the first sequence of non-whitespace characters in str is not a valid integral number, 
    or if no such sequence exists because either str is empty or it contains only whitespace 
    characters, no conversion is performed.

    If no valid conversion could be performed, a zero value is returned.

    Note:

    Only the space character ' ' is considered as whitespace character.
    Assume we are dealing with an environment which could only store integers within the 32-bit 
    signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of 
    representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.
    Example 1:

    Input: "42"
    Output: 42
    
    Example 2:

    Input: "   -42"
    Output: -42
    Explanation: The first non-whitespace character is '-', which is the minus sign.
                Then take as many numerical digits as possible, which gets 42.

    Example 3:

    Input: "4193 with words"
    Output: 4193
    Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.

    Example 4:

    Input: "words and 987"
    Output: 0
    Explanation: The first non-whitespace character is 'w', which is not a numerical 
                digit or a +/- sign. Therefore no valid conversion could be performed.

    Example 5:

    Input: "-91283472332"
    Output: -2147483648
    Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
                Thefore INT_MIN (−231) is returned.
*/


/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var i = 0;
    var sign = 1
    var answer = 0
    var INT_MAX = Math.pow(2,31) - 1, INT_MIN = Math.pow(-2,31)
    // this for loop is to get to the first non-whitespace char
    for(; i < str.length && str[i] == ' '; i++);
    
    // this is when there the string is empty or just whitespace chars
    if(i >= str.length) return 0
    
    // just to see if the first non-whitespace is the negative sign
    if(str[i] == '-'){
        sign = -1
    }
    // increase it to the next if it is the negative or plus signs
    str[i] == '-' || str[i] == "+" ? i++ : i;
    var digit = 0
    for(; i < str.length; i++){
        var c = str[i]
        switch (c){
            case '0':
                digit = 0
                break;
            case '1':
                digit = 1
                break
            case '2':
                digit = 2
                break
            case '3':
                digit = 3
                break
            case '4':
                digit = 4
                break
            case '5':
                digit = 5
                break
            case '6':
                digit = 6
                break
            case '7':
                digit = 7
                break
            case '8':
                digit = 8
                break
            case '9':
                digit = 9
                break
            default:
                return answer * sign
                break
        }
        answer = answer*10 + digit
        if(answer * sign > INT_MAX || answer * sign <= INT_MIN)
            return sign == 1 ? INT_MAX : INT_MIN
    }
    return answer * sign
};