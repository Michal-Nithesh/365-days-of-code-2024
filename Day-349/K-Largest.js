module.exports = { 
 //param A : array of integers
 //param B : integer
 //return a array of integers
    solve : function(A, B){
        if(B>=A.length){
            return A;
        }
        let array=[];
        for(let i=0;i<B;i++){
            array.push(A[i]);
        }
        for(let i=Math.floor(array.length/2);i>=0;i--){
            adjust(array,i);
        }
        //console.log(array);

/*
        function minheap(arr,i){
            if(i>arr.length){
                return 100000000;
            }
            let a=arr[i],b=null,c=null,minval=a;
            if(2*i+1<arr.length){
                b=minheap(arr,2*i +1);
                if(2*i+2 <arr.length){
                    c=minheap(arr,2*i +2);
                    minval=Math.min(minval,c);
                }
                minval=Math.min(minval,b)
            }
            if(b!=null){
                if(b==minval){
                    let temp=arr[i];
                    arr[i]=arr[2*i+1];
                    arr[2*i+1] = temp;
                }
            }
            if(c!=null){
                if(c==minval){
                    let temp=arr[i];
                    arr[i]=arr[2*i+2];
                    arr[2*i+2] = temp; 
                }
            }
            return minval;
        }
        */
        

        for(let i=B;i<A.length;i++){
            if(A[i]>array[0]){
                array[0]=A[i];
                adjust(array,0);
                //console.log(array,A[i]);
            }
        }

        return array;

        function adjust(arr,i){
            if(2*i+1>arr.length){
                return;
            }
            let a=arr[i],b=null,c=null,minval=a;
            if(2*i+1<arr.length){
                b=arr[2*i +1];
                if(2*i+2 <arr.length){
                    c=arr[2*i +2];
                    minval=Math.min(minval,c);
                }
                minval=Math.min(minval,b)
            }

            if(b!=null){
                if(b==minval){
                    let temp=arr[i];
                    arr[i]=arr[2*i+1];
                    arr[2*i+1] = temp;
                    adjust(arr,2*i+1);
                    return;
                }
            }
            if(c!=null){
                if(c==minval){
                    let temp=arr[i];
                    arr[i]=arr[2*i+2];
                    arr[2*i+2] = temp; 
                    adjust(arr,2*i+2);
                    return;
                }
            }
            return;
        }


    }
};

