const { urlToHttpOptions } = require("url");

class Node {

constructor(data){
    this.data = data;
    this.next = null;
}

}

class LinkedList {

    constructor(){
        this.head = null;
        this.size = 0;
    }
//adding the list 
 add(data){
     var node = new Node(data);

     if(this.head == null){
         this.head = node;

     }else{
         let curr = this.head

         while(curr.next != null){

            curr = curr.next;
         }
         console.log(curr.data)
         console.log(curr.next)
         console.log(node)

         curr.next = node
         console.log(curr.next)

         
         
     }


 }


 //print the values

 print(){

    let curr = this.head;
    let res = [];

    while(curr != null){  
        res.push(curr.data);
        curr = curr.next;

    }
    return res


 }
 //insertion at the head ;


 insertAtHead(val){
    if(val == undefined) return this.head

    let curr = this.head;

    let node = new Node(val)

        node.next = curr;

    this.head = node;

    this.size++
    
    return this.head;
    
    
}


insertAtEnd(val){
    if(val == undefined) return this.head
    
    let curr = this.head;
    
    let node = new Node(val);
    
    while(curr.next){
        
        curr = curr.next;
    } 
    curr.next = node;
    
    this.size++
    return this.head;
    
    
 }

 insertBefore(val,before ){
     //i was taking to prevv and curr two value so i can have a record of the previous valus and
     //then first add node to curr and then prev back to the node 

    ///check if present is not then add it to last node
    //if fist present then add to first 

    let present = false;
    
    let current = this.head;
    

    while (current.next){
        

        if(current.data == before){
            present = true;
            break;
        }

        current = current.next;
    }


    if(present){

        if(this.head.data == before){
            this.insertAtHead(val);
        } else{
            let curr = this.head;
    let prev = null;

    

    while(curr.data != before){

        prev = curr
        curr = curr.next

    }
    let node = new Node(val);
    node.next = curr;
    prev.next = node;

    


    return this.head;



    }


    }else{
        this.insertAtEnd(val)
    }
    
 }

 insertAfter(val, after){
    let present = false;
    
    let current = this.head;
    

    while (current.next){
        

        if(current.data == after){
            present = true;
            break;
        }

        current = current.next;
    }

    if(present){

       let curr = this.head;

       while(curr.data != after){

        curr = curr.next ;

       }

       let node = new Node(val);
       let prev = curr.next;
       curr.next = node;
       node.next = prev;

       return this.head;

    }else{
        this.insertAtEnd(val)
    }





}



deleteBeg(){


this.head = this.head.next

return this.head
    

    
}

deleteEnd(){

    let curr = this.head;

    while(curr.next.next){

        curr = curr.next

    }

    curr.next = null




}

deleteNode(val){

    let present = false;

    let curr = this.head;

    while(curr.next){
        if(curr.data == val){
            present = true;
            break;
        }

        curr = curr.next;

    }

    if(present){

        if(this.head.data == val){

            this.deleteBeg
        } else{

            let curr = this.head;
            let prev = null;

            while(curr.data != val){
                prev = curr
                curr = curr.next;

            }

            prev.next = curr.next;
        }


    }else{

        return this.head;
    }


}
present(val){


    let present = false;

    let curr = this.head;

    while(curr.next){
        if(curr.data == val){
            present = true;
            break;
        }

        curr = curr.next;

    }

    return present;
}

deleteAfter(val){

   let pres = this.present(val);

   if(pres){

    let curr = this.head;

    while(curr.data != val){

        curr = curr.next;
    }

    curr.next = curr.next.next

    return this.head;


   } else{
       return this.head;
   }

   


}

}


// const list = new LinkedList 

// list.add(2);
// list.add(3)
// list.insertAtHead(1)
// list.insertAtEnd(1);
// list.insertBefore(1,1);
// list.insertAfter(9,3)
// list.deleteBeg()
// list.deleteBeg()
// list.add(2);
// list.add(3)
// list.deleteEnd()
// list.deleteEnd()
// list.deleteNode(9)
// list.deleteNode(3)
// list.add(4);
// list.add(5);
// list.deleteAfter(1)
// console.log(list.print())
// list



// let lists = new LinkedList()
// lists
// let arr = [1,2,3,4,5];

// for(let a of arr) {
//     a
//     lists.add(a)
// }
// lists

// console.log(lists.print())


// //print in the revers oder with using recriosn which help to store the values for it 
// //it works only when recrion completed it happen

// let out = []
// function printReverse(head){
    

//     if(!head){ 
//         return 
//     }else{

//         printReverse(head.next);
//         out.push(head.data)

//     }

// }

// printReverse(lists.head);



// out

//reveset ht linked list head

let list2 = new LinkedList();

list2.add(1)
list2.add(2)
list2.add(3)
list2.add(4)
list2.add(5)
console.log(list2.print())
console.log(list2);


function reversList(head){
 

    let curr = head
    let prev = null;
    let next = null;
    

    while(curr != null){
        next = curr.next;
       


        curr.next = prev;
       prev = curr;




        curr = next;


    }

    return prev



}

console.log(list2.print())
list2
let head = reversList(list2.head)
list2.head = head
console.log(list2.print());


//reverse the with group size of k 

list3 = new LinkedList();
let arr = [1,2,3,4,5,6,7,8]
for(let a of arr){

    list3.add(a)

}

function reverserBygroup(head, k){

    let curr = head;
    let count = 0;
    let prev = null;
    let next = null;

    while(curr != null && count<k){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        count++

    } 

    if(next != null){
        //while reach there the head as become the back and to 
        //to continue the list wee add head.next 

        head.next = reverserBygroup(next,k)
    }

    return prev


    

}

list3.head =  reverserBygroup(list3.head, 3)

console.log(list3.print())



//merge two sorted Linked list

let listSort1 = new LinkedList() , listSort2 = new LinkedList()

let arr1 = [1,3,5,7];
let arr2 = [2,4,6,8]
for(let a of arr1) listSort1.add(a)
for(let a of arr2) listSort2.add(a)


function sortList(a,b){

    if(a == null) return b;
    if(b == null) return a;


    if(a.data < b.data) {
        a.next = sortList(a.next,b)
        return a
    } else {

        b.next = sortList(a, b.next);
        return b
    }

}
listSort2.head = sortList(listSort1.head,listSort2.head);

console.log(listSort2.print())


//find the middle node in the single linked list and


let listMiddle = new LinkedList();

let arrMid = [1,2,3,4,5];


for(let a of arrMid) listMiddle.add(a);

//we can solve by find the length of the linked list 
//we can do by one by slow pointer and fast pointer
//if doubt refer to https://dev.to/alisabaj/finding-the-middle-of-a-linked-list-36kp


function findMiddle(head){

    let curr = head;
    let slow = head;

    let fast = head;

    if(slow == null && fast == null) return head.data;


        while( fast && fast.next){

            slow = slow.next;
            fast = fast.next.next

        }

        return slow.data
    


}

console.log(findMiddle(listMiddle.head))



//detection of the loop in single linked list 


//first approch hash set put a object and curr and 

//for the pratice refeter to https://leetcode.com/problems/linked-list-cycle/

// var hasCycle = function(head) {
    
//     let curr = head;
    
//     let obj = {};
    
//     while(curr != null){
            
//         if(obj[curr.val]){
//             return true
//         }
        
//         obj[curr.data] = 1
//        curr = curr.next;
//     }
//     return false
    
// };


//floyd cycle algorithm  we use the find and slow algorithm we havr slow pointer and fast pointer 
//slow move by slow.next and the fast move two times fast = fast.next.next
//check slotuin in leetcode

// Your input
// [3,2,0,-4]
// 1
// Output
// true
// Expected
// true

// var hasCycle = function(head) {
    
//     let flag = 0;
    
//     let slow = head;
//     let fast = head;
    
//     while(slow != null && fast != null && fast.next != null){
        
//         slow = slow.next;
//         fast = fast.next.next;
        
//         if(slow == fast){
//             flag = 1;
//             break;
//         }
//     }
    
//     if(flag == 1){
//         return true
//     }else {
//         return false
//     }
    



//find the nth element in the linked list form the end //we esay slove by one traves and two pointer 
//for two pointer wee need the k polace to the fist pointer


//




