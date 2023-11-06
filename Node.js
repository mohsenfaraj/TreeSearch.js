class Node {
    children = [] ;
    constructor(name , cost , depth , parent){
        this.name = name ;
        this.cost = cost ;
        this.depth = depth ;
        this.parent = parent
    }
    print(){
        let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        return `(Node ${alphabet.charAt(this.name)},cost: ${this.cost})`
    }
}

export default Node ;