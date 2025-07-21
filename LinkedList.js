

class LinkedList{

    constructor(){

        this.head = null;
        this.tail = null
        this.length = 0;

    }


    prepend(data){
        const newNode = new Node(data);
        this.length++;

        newNode.next = this.head;
        this.head = newNode;
    }

    append(data){
        const newNode = new Node(data);
        this.length++;

        if(!(this.head)){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
            this.tail = newNode;
        }
    }

    at(index){

        if(index < 0 || index > (this.length - 1) || this.length === 0){
            throw new Error("AHHHH!")
        }

        let current = this.head;  
        if(index === 0){
            return current
        }

        for(let i = 1; i <= index; i++){
            current = current.next;
        }
        return current;
    }

    print(){

    }
}


class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

const ll = new LinkedList()