import Tree from "./Tree.js"
let mathtml = document.querySelector("#mat")
let resulthtml = document.querySelector("#result")
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let fromhtml = document.querySelector("#from")
let tohtml = document.querySelector("#to")
let performbtn = document.querySelector("#performbtn")
performbtn.addEventListener("click" , () => {perform()})

function perform() {
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
    let tree = new Tree(matrix , startPoint , endPoint)
    let answer = tree.search() ;
    if (answer == "failure"){
        resulthtml.innerHTML = "failure"
        return
    }
    let path = "" ;
    while(answer.parent !== null){
        if (!path) path = answer.print();
        else {
            path = answer.print() + "-->" + path
        }
        answer = answer.parent ;
    }
    path = answer.print() + "-->" + path ;
    resulthtml.innerHTML = path ;
}