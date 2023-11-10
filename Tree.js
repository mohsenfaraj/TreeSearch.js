import Node from './Node.js'
class Tree{
    fringe = [] ;
    expandTree = [] ;
    constructor(matrix , start , end , method){
        this.matrix = matrix ;
        this.start = start ;
        this.end = end ;
        let node = new Node(start , 0 , 0 , null)
        this.fringe.push(node)
        if (method == "BFS"){
            this.removeFirst = this.BFSRemoveFirst ;
        }
        else if(method == "UCS"){
            this.removeFirst = this.UCSRemoveFirst ;
        }
    }

    expand(current) {
        let state = current.state ;
        this.matrix[state].forEach((item , i) => {
            if (item > 0){
                let child = new Node(i , parseInt(current.cost) + parseInt(item) , parseInt(current.depth) +1 , current)
                this.fringe.push(child)
            }
        });
    }

    BFSRemoveFirst(){
        // for bfs
        return this.fringe.shift() ;
    }

    UCSRemoveFirst() {
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
        return item.state == this.end
    }

    search() {
        while(true){
            let current = this.removeFirst()
            if (!current){
                return "failure"
            }
            this.expandTree.push(current)
            if (this.goalTest(current)){
                return current ;
            }
            this.expand(current)
        }
    }

    solution(answer) {
        let path = "" ;
        while(answer.parent !== null){
            if (!path) path = answer.print();
            else {
                path = answer.print() + "-->" + path
            }
            answer = answer.parent ;
        }
        path = answer.print() + "-->" + path ;
        return path ;
    }
    printExpandTree(){
        let string = "" ;
        this.expandTree.forEach(item => {
            string += item.print() + "   "
        });
        return string ;
    }
}
export default Tree