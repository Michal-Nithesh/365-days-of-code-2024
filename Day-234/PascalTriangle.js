// Helper to generate new row based on previous row
const generate_row = (prev_row) => {
    // Create an empty array
    const new_row = [];
    
    // Push starting one
    new_row.push(1);
    
    // Based on previous row calculate, each elements on new row
    for(let i=0; i<prev_row.length-1; ++i){
        new_row.push(prev_row[i] + prev_row[i+1]);
    }
    
    // Push last one
    new_row.push(1);
    
    // Return newly created row
    return new_row;
}

module.exports = { 
 //param A : integer
 //return a array of array of integers
    solve : function(A){
        // Base case - If A is 0, return empty arrat
        if(A == 0){
            return [];
        }
        
        // Create an ans array with first row
        const ans = [[1]];
        
        // While ans.length is less than A push new row in it
        while(ans.length < A){
            ans.push(generate_row(ans[ans.length - 1]));
        }
        
        // Return ans
        return ans;
    }
};

