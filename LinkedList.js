

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

    pop(){
        const newTail = this.at(this.length - 2);
        newTail.next = null;
        this.tail = newTail;
        this.length--
    }

    find(value){
        if(this.length === 0){
            return null
        }
    
        let current = this.head;
    
        for(let i = 0; i <= (this.length - 1); i++){
            if(current.data === value){
                return i;
            }
            current = current.next;
        }
        return null

    }

    contains(value){
        const result = this.find(value)
        if(result || result === 0){
            return true
        }
        return false
    }

    print(){

        let printedList = "";
        let current = this.head;
        for(let i = 0; i <= (this.length - 1); i++){
            let newString = `${current.data}`
            if(current.next){
                newString = newString + " -> "
            }
            printedList = printedList + newString;
            current = current.next;
        }
        return printedList;
    }
}


class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

const ll = new LinkedList()
ll.append("wah");
ll.append("shuba");
ll.append("peko");