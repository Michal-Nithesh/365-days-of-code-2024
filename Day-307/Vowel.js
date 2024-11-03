module.exports = { 
 //param A : string
 //return an integer
    solve : function(A){
        const vowels = [];
        const consonants = [];
        let count = 0;
        
        for(let i = 0; i < A.length; i++) {
            if("aeiou".includes(A.charAt(i))) {
                vowels.push(i);
            } else {
                consonants.push(i);
            }
        }
        
        let c = 0;
        for(let v = 0; v < vowels.length; v++) {
            while(consonants[c] < vowels[v] && c < consonants.length) {
                c++;
            }
            count = (count + consonants.length - c) % (10**9 + 7);
        }
        
        let v = 0;
        for(let c = 0; c < consonants.length; c++) {
            while(vowels[v] < consonants[c] && v < vowels.length) {
                v++;
            }
            count = (count + vowels.length - v) % (10**9 + 7);
        }        
        
        //console.log({ vowels, consonants })
        return count;

    }
};

