class Node {

    constructor(val){
        this.val = val;
        this.next = null;

    }
}

class Linkedlist{

    constructor(){

        this.head = null;
    }

    append(val){
        if(this.head == null){
            this.head = new Node(val);
            return ;
        }

        let curr = this.head;
        while(curr.next !== null){

            curr = curr.next;
        }

        curr.next = new Node(val);

    }
    print(){
        let str = '';
        let curr = this.head;

        while(curr !== null){
            str += curr.val +'->';
            curr = curr.next
        }
        console.log(str);
    }

    constains(tar){
        let curr = this.head;
        while(curr !== null){
           if(curr.val === tar){
               return true;
           }
            curr = curr.next
        }

        return false;


    }

       




}

const list = new Linkedlist();
list.append('a');
list.append('b');
list.append('c');
list.append('d')
list.print();

console.log(list.constains('a'))

console.log(list.print())
