
//dark-mode
const darkMode = document.querySelector(".dark-mode");
const myBody = document.body;

let arr = ['<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#121212" viewBox="0 -960 960 960" width="24"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#fff" viewBox="0 -960 960 960" width="24"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>'];
let a = 0;
let num = 0;
darkMode.addEventListener('click',()=>{
    num++;
    if(num>=arr.length){
        num = 0;
    }
    myBody.classList.toggle("dark");
    darkMode.innerHTML = arr[num];
})


//todo
const fillme = document.querySelector("#task-maker");
const addTask = document.querySelector(".add");

let taskMaker = () => {
    let list = document.querySelector(".list");
    let newBar = document.createElement("div");
    newBar.className = "new-task";
    newBar.innerHTML = fillme.value;
    list.append(newBar);
    let checker = document.createElement("div");
    checker.className = "check-remove";
    newBar.append(checker);
    let checkBox = document.createElement("input");
    checkBox.type="checkbox";
    checkBox.className = "checkme";
    checker.append(checkBox);
    let cancel = document.createElement("button");
    cancel.className = "remove";
    cancel.innerHTML= "x";
    cancel.addEventListener('click',()=>{
        newBar.style.display = "none"; 
    })
    checker.append(cancel);
}

addTask.addEventListener('click', taskMaker);



//search

// let searchList = () => {
//     let input  = document.querySelector("#taskmaker").value;
//     input = input.toLowerCase();
//     let x = document.getElementsByClassName("new-task");
//     for (i=0;i<x.length;i++) {
//         if(!x[i].innerHTML.toLowerCase().includes(input)){
//             x[i].style.display="none";
//         }
//         else{
//             x[i].style.display="list-item";
//         }
//     }
// }

// fillme.addEventListener("keyup",searchList);



// function sear() {
//     let input = document.getElementById('search').value
//     input = input.toLowerCase();
//     let x = document.getElementsByClassName('animals');
//     for (i = 0; i < x.length; i++) {
//         if (!x[i].innerHTML.toLowerCase().includes(input)) {
//             x[i].style.display = "none";
//         }
//         else {
//             x[i].style.display = "list-item";
//         }
//     }

// }