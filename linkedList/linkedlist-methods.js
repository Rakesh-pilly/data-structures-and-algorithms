class Node{

constructor(val){

    this.data = val;
    this.next = null;
}

}

class LinkedList{
constructor(){
    this.head = null;
    this.size = 0;

}
add(val){
    var node = new Node(val);

    //if the linked list is empty
    if(!this.head){

        this.head = node;
    } else{

    let curr = this.head;

    while(curr.next != null){
        curr = curr.next;
    }
    curr.next = node
}
this.size++

    


}

//print 

print(){
    let curr = this.head;
    let res = [];

    while(curr !== null ){
        res.push(curr.data);
        curr = curr.next;

    }

    return res


}

//isEmpty

isEmpty(){
    return this.size === 0? true: false;
}

sizeOf(){
 return this.size
}

insertAt(val,i){

    if(i>this.size|| i<0 && this.size){

        return false;
    }

    var node = new Node(val);
    var curr = this.head;

    var prev = null;
    var j = 0;
    if(i == 0){
        node.next = curr;
        this.head = node
    }
    else{

        while(j<i){
            prev = curr;
            curr = curr.next;
            j++
        }
        //adding the node at index
        prev.next = node;
        //add the new prev back to the prev
        prev = prev.next
        //adding the prev to rest
        prev.next = curr;

        this.size++


    }

}


remove(val){

    let curr = this.head;
    let prev = null;

    while(curr!== null){
        if(curr.data === val){
            if(prev === null){
                this.head = curr.next;
            }else{
                prev.next = curr.next
            }
            this.size--;
            return true;

            
        }
        prev = curr;
        curr = curr.next;
    }
}

}

const list = new LinkedList();
list.add(1);
list.add(2);
list.insertAt(0,0)
list.insertAt(5,1);
list.remove()
console.log(list.sizeOf())
console.log(list.isEmpty());
console.log(list.print())

