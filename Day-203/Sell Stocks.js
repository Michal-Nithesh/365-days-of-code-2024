module.exports = { 
 //param A : array of integers
 //return an integer
	maxProfit : function(A){
		let profit = [];
        let buy=A[0];
        for(let i=1;i<A.length;i++){
            let sale=A[i]
            if(buy<sale){
                profit.push(sale-buy)
            }else{
                buy=sale
            }
        }
        if(profit.length==0){
            return 0
	    }else{
            return Math.max(...profit)
        }
	}
}
