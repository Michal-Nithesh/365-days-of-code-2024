module.exports = { 
 //param A : integer
 //return a strings
	convertToTitle : function(A){
		let x = A, ans = "", arr = [];
		while(x > 0){
			arr.unshift(x % 26);
			x = Math.floor(x / 26);
		}
		
	for(i = arr.length-1; i >= 0; i--){
			if(arr[i] < 1){
				if(i === 0)break;
				arr[i - 1] -= 1;
				if(arr[i] < 0){
					ans = String.fromCharCode(arr[i] + 26 + 64) + ans;
				} else 
					ans = "Z" + ans;
			} else {
				ans = String.fromCharCode(arr[i] + 64) + ans;
			}
		}
		return (ans);
	}
};
