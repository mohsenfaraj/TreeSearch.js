import Tree from "./Tree.js"
let mathtml = document.querySelector("#mat")
let resulthtml = document.querySelector("#result")
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let fromhtml = document.querySelector("#from")
let tohtml = document.querySelector("#to")
let performbtn = document.querySelector("#performbtn")
let method = document.querySelector("#method");
let expandHTML = document.querySelector("#expand")
let pathHTML = document.querySelector("#path")
let shortHTML = document.querySelector("#short")
performbtn.addEventListener("click" , () => {perform()})

function perform() {
    expandHTML.innerHTML = "" ;
    pathHTML.innerHTML = "" ;
    
    if(!mathtml.value){
        alert("please enter the adjacency matrix!")
        return;
    }
    let input = mathtml.value ;
    let lines = input.trim().split("\n")
    let matrix = lines.map((line) => {
        return line.trim().split(" ")
    })
    if (!fromhtml.value || !tohtml){
        alert("please set the starting and end point!")
        return
    }
    let startPoint = alphabet.indexOf(fromhtml.value.toUpperCase())
    let endPoint = alphabet.indexOf(tohtml.value.toUpperCase()) ;
    // check if entered range is available in matrix
    if (startPoint >= matrix.length || endPoint >= matrix.length){
        alert("Error! input range is out of matrix bound.")
        return ;
    }
    if (startPoint == -1 || endPoint == -1){
        alert("Error! enter a valid A-Z value in range fields.")
    }
    let tree = new Tree(matrix , startPoint , endPoint , method.value)
    let answer = tree.search() ;
    if (answer == "failure"){
        path.innerHTML = "failure"
        return
    }
    // solution + expand tree
    let path = tree.solution(answer)
    let expandTree = tree.printExpandTree() ;
    shortHTML.innerHTML = `Cost: ${answer.cost} , Depth: ${answer.depth}`
    pathHTML.innerHTML = "path: " + path ;
    expandHTML.innerHTML = "ExpandTree: " + expandTree ;
}