/**
    There are two sorted arrays nums1 and nums2 of size m and n respectively.

    Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

    You may assume nums1 and nums2 cannot be both empty.

    Example 1:

        nums1 = [1, 3]
        nums2 = [2]

        The median is 2.0
    
    Example 2:

        nums1 = [1, 2]
        nums2 = [3, 4]

        The median is (2 + 3)/2 = 2.5
 */
class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int result [] = new int [nums1.length + nums2.length];
        int i = 0, j = 0, k=0;
        int resultLen = nums1.length + nums2.length;
        int resultMiddle = ((nums1.length + nums2.length)/2) +2; 
        boolean mid = false;
        while(i < nums1.length && j < nums2.length){
            if(nums1[i] < nums2[j]){
                result[k++] = nums1[i++];
            }else{
                result[k++] = nums2[j++];
            }
            if(k > resultMiddle){
                mid = true;
                break;
            }
        }
        if(mid == false){
            if( i >= nums1.length){
                while(j < nums2.length){
                    result[k++] = nums2[j++];
                    if(k > resultMiddle){
                        mid = true;
                        break;
                    }
                }
            }else if( j >= nums2.length){
                while(i < nums1.length){
                    result[k++] = nums1[i++];
                    if(k > resultMiddle){
                        mid = true;
                        break;
                    }
                }
            }
        }

        
        if(resultLen%2 == 1){
            return result[resultLen/2] / 1.0;
        }else{
            return (( result[(resultLen-1)/2] + result[resultLen/2] ) / 2.0);
        }
    }
}