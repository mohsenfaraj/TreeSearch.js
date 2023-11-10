class Node {
    children = [] ;
    constructor(state , cost , depth , parent){
        this.state = state ;
        this.cost = cost ;
        this.depth = depth ;
        this.parent = parent
    }
    print(){
        let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        return `(Node ${alphabet.charAt(this.state)}, C:${this.cost} , D:${this.depth})`
    }
}

export default Node ;