// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = { 
 //param A : head node of linked list
 //return the head node in the linked list
    solve : function(A){
        class Node {
            constructor(data) {
                    this.data=data;
                    this.next=null;
                }
        }
        let headone= new Node(1);
        let headzero=new Node(0);
        let one=headone,zero=headzero;
        let temp=A;

        //console.log(headzero.data,headone.data,one.data,zero.data,A.data,temp.data);

        while(temp != null){
            if(temp.data==0){
                zero.next = temp;
                zero = zero.next;
                temp=temp.next;
                zero.next=null;
            }
            else{
                one.next = temp;
                one=one.next;
                temp=temp.next;
                one.next=null;
            }
            
        }
        zero.next=headone.next;
        
        return headzero.next;


    }
};

