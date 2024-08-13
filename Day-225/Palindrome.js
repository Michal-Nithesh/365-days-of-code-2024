module.exports = { 
 //param A : string
 //return an integer
    solve : function(array){
        var hash = {}
        var count = 0
        var string = ""
        for(var i=0;i<array.length;i++){
            if(hash[array[i]]>=1){
                hash[array[i]] += 1
            }else{
                hash[array[i]] = 1
                string += array[i]
                count++
            }
        }
        var res = 0
        for(var i=0;i<count;i++){
            if(hash[string[i]]%2==0){
                res += 0
            }else{
                res += 1
            }
        }
        if(res>1){
            return 0
        }else{
            return 1
        }
    }
};

