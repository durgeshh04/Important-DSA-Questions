// Linked List Operations

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}



class LinkedList {
    constructor() {
        this.head = null;
    }

    size() {
        let curr = this.head;
        let count = 0;
        while (curr) {
            count++;
            curr = curr.next;
        }
        return count;
    }

    addFirst(data) {
        const node = new Node(data);
        node.next = this.head;
        this.head = node;
    }

    addLast(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = node;
    }

    addAtIdx(idx, data) {
        const node = new Node(data);

        if (idx < 0 || idx > this.size()) {
            console.log("Invalid index");
            return;
        }

        if (idx == 0) {
            node.next = this.head;
            this.head = node;
            return;
        }

        let curr = this.head;
        for (let i = 0; i < idx - 1; i++) {
            curr = curr.next;
        }
        node.next = curr.next;
        curr.next = node;
    }

    removeTop() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }
        let curr = this.head;
        while (curr.next.next) {
            curr = curr.next;
        }
        curr.next = null;
    }

    removeAtIdx(idx) {
        if (idx < 0 || idx > this.size()) {
            console.log("Invalid index in remove at index method");
        }

        if (idx == 0) {
            this.head = this.head.next;
            return;
        }

        let curr = this.head;
        for (let i = 0; i < idx - 1; i++) {
            curr = curr.next;
        }

        if (curr.next) {
            curr.next = curr.next.next;
        }
    }

    printList() {
        let curr = this.head;
        while (curr) {
            console.log(curr.data);
            curr = curr.next;
        }
    }
}

const LL = new LinkedList();
LL.addFirst(5);
LL.addFirst(10);
LL.addFirst(15);
LL.addFirst(20);
LL.addLast(25);
LL.addLast(30);
LL.addAtIdx(2, 50);
LL.addAtIdx(8, 45);
LL.addAtIdx(6, 55);
LL.removeTop();
LL.removeLast();
console.log("Size:", LL.size());
LL.removeAtIdx(2);
LL.printList();