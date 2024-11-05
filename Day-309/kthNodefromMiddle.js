// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = { 
 //param A : head node of linked list
 //param B : integer
 //return an integer
    solve : function(A, B){
        let m = this.mid(A)
        let c = A,res=A
        while (c && B) {
            if (c===m) return -1
            c=c.next
            B--
        }
        if(!c) return -1
        while(c && c!==m){
            c=c.next
            res=res.next
        }
        if(res) return res.data
        return -1
    },
    mid : function(A){
        let l = A,r = A
        while (r && r.next){
            l=l.next
            r=r.next.next
        }
        return l
    }
};

