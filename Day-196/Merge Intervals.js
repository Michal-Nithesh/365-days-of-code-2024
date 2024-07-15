module.exports = {
    /**
     * Interval: [start, end]
     * 
     * param A: intervals, a list of Intervals
     * return :a list of Intervals
     */
    solve: function (intervals, new_interval) {

    },
};

module.exports = { 
    /** 
    * Interval: [start, end] 
    * 
    * param A: intervals, a list of Intervals 
    * return :a list of Intervals 
    */ 
    solve: function (intervals, new_interval) { 
        if(new_interval[0]>new_interval[1]){ 
            var temp=new_interval[0]; 
            new_interval[0] = new_interval[1]; 
            new_interval[1]=temp; 
            
        } 
        intervals.push(new_interval); 
        intervals.sort(function(a, b){ 
            if(a[0] < b[0]) 
            return -1; 
            else if( a[0] > b[0]) 
            return 1; 
            return 0; 
            
        });  
        var merged = [intervals[0]]; 
        for(var i = 1; i < intervals.length; i++){ 
            var start = intervals[i][0]; 
            var end = intervals[i][1]; 
            var top = merged[merged.length - 1]; 
            if(top[1] < start){ 
                merged.push([start, end]); 
                
            } else if(top[1] < end){ 
                merged.pop(); 
                merged.push([top[0], end]); 
                
            } 
            
        } 
        return merged; 
        
    } 
    
}
