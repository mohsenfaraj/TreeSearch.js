import Node from './Node.js'
class Tree{
    fringe = [] ;
    node ;
    constructor(matrix , start , end){
        this.matrix = matrix ;
        this.start = start ;
        this.end = end ;
        let node = new Node(start , 0 , 0 , null)
        this.fringe.push(node)
        this.node = node ;
    }

    expand(current) {
        let nodenum = current.name ;
        this.matrix[nodenum].forEach((item , i) => {
            if (item > 0){
                let child = new Node(i , parseInt(current.cost) + parseInt(item) , parseInt(current.depth) +1 , current)
                this.node.children.push(child)
                this.fringe.push(child)
            }
        });
    }

    removeFirst() {
        // for bfs
        // return this.fringe.shift() ;
        // for UCS , find the lowest cost and remove that item
        let lowest ;
        let number ;
        this.fringe.forEach((element , i) => {
            if (!lowest){
                lowest = element;
                number = i ;
            }
            else {
                if (element.cost < lowest.cost){
                    lowest = element ;
                    number = i ;
                }
            }
        });
        this.fringe.splice(number , 1) ;
        return lowest 
    }
    goalTest(item){
        return item.name == this.end
    }
    search() {
        while(true){
            let current = this.removeFirst()
            if (!current){
                return "failure"
            }
            if (this.goalTest(current)){
                return current ;
            }
            this.expand(current)
        }
    }
}
export default Tree