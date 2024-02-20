/**
 * Find First Palindromic String in the Array
 * 
 * Given an array of strings words, return the first palindromic string in the
 * array. If there is no such string, return an empty string "".
 * 
 * A string is palindromic if it reads the same forward and backward.
 * 
 * 
 * 
 * Example 1:
 * 
 * Input: words = ["abc","car","ada","racecar","cool"]
 * Output: "ada"
 * Explanation: The first string that is palindromic is "ada".
 * Note that "racecar" is also palindromic, but it is not the first.
 * Example 2:
 * 
 * Input: words = ["notapalindrome","racecar"]
 * Output: "racecar"
 * Explanation: The first and only string that is palindromic is "racecar".
 * Example 3:
 * 
 * Input: words = ["def","ghi"]
 * Output: ""
 * Explanation: There are no palindromic strings, so the empty string is
 * returned.
 */

class FindFirstPalindromicStringInTheArray {
    public String firstPalindrome(String[] words) {
        if (words.length == 0)
            return "";

        for (int i = 0; i < words.length; i++) {
            if (isPalindromic(words[i])) {
                return words[i];
            }
        }

        return "";
    }

    public boolean isPalindromic(String word) {
        int m = word.length() - 1;
        for (int i = 0; i <= m; i++) {
            if (word.charAt(i) != word.charAt(m)) {
                return false;
            }
            m--;
        }

        return true;
    }
}