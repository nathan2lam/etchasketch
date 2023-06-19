const container = document.querySelector(".container");
const change = document.getElementById("reset");
const clear = document.getElementById("clear");
let num = 16;
function createGrid(num){
    for(let i = 0; i < num; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for(let i = 0; i < num; i++){
            const cube = document.createElement("div");
            cube.classList.add("cube");
            cube.addEventListener("mouseover", (e) =>{
                e.target.style.cssText = "background: black";
                })
            row.appendChild(cube);
        }
    }
}
function removeGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}
function getNumber(){
    let num = prompt("enter a number");
    while(isNaN(num) || num > 100){
        num = prompt("enter a number again");
    }
    return num;
}
function newGrid(){
    removeGrid();
    createGrid(num);
}
function clearGrid(){
    removeGrid();
    createGrid(num);
}
createGrid(num);
change.addEventListener("click", () =>{
    num = getNumber();
    newGrid();
});
clear.addEventListener("click", clearGrid);

