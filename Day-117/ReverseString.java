public class Solution {
    public String solve(String A) {
        String[]arr = A.trim().split("\\s+");
        String ans = "";
        
        for(int i = arr.length-1 ; i > 0 ; i--){
            ans = ans + arr[i] + " ";
        }
        ans += arr[0];
        return ans;
    }
}
