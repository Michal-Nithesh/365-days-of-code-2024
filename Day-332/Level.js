// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }


class Queue{
    data = Object.create(null);
    nextEnqueueIndex = 0;
    lastDequeuedIndex = 0;
    
    isEmpty() {
        if(this.lastDequeuedIndex === this.nextEnqueueIndex) {
            return true;
        }
        return false;
    }

    /** Enqueues the item in O(1) */
    enqueue(item) {
        this.data[this.nextEnqueueIndex] = item;
        this.nextEnqueueIndex++;
    }

    /**
     * Dequeues the first inserted item in O(1)
     * If there are no more items it returns `undefined`
     */
    dequeue() {
        if (this.lastDequeuedIndex !== this.nextEnqueueIndex) {
            const dequeued = this.data[this.lastDequeuedIndex];
            delete this.data[this.lastDequeuedIndex];
            this.lastDequeuedIndex++;
            return dequeued;
        }
    }
}


module.exports = { 
 //param A : root node of tree
 //return a array of array of integers
    levelOrder : function(A){
        var out = [];
        var q = new Queue();
        q.enqueue([A, 0]);
        
        while(!q.isEmpty()) {
            var pair = q.dequeue();
    
            if (!out[pair[1]])
                out[pair[1]] = [];
            
            out[pair[1]].push(pair[0].data);
            
            
            if (pair[0].left)
                q.enqueue([pair[0].left, pair[1]+1]);
            if (pair[0].right)
                q.enqueue([pair[0].right, pair[1]+1]);
            
        }
        return out;
    }
};

