const bs = document.getElementById("bs");
const ss = document.getElementById("ss");
const is = document.getElementById("is");
const ms = document.getElementById("ms");
const qs = document.getElementById("qs");
const hs = document.getElementById("hs");

function displayTandS(){
    const tands = document.querySelector(".timeAndSpace");
    console.log(tands);
    tands.style.display = 'flex';
    let pforT = document.getElementById("tc");
    let pforS = document.getElementById("sc");

    pforT.innerText = 'Time Complexity : O(n²)';
    pforS.innerText = 'Space Complexity : O(1)';
    return;
}   
bs.addEventListener("click",()=>{
    bs.style.color = 'crimson';
    displayTandS();
    disableScreen();
    bubbleSort();
});

const bars = document.createElement("div");
bars.setAttribute("class","container");
const sect = document.querySelector(".sect");
sect.append(bars);
for(let i = 0; i < 5; i++){
    const r = (Math.random()*20) + 1;
    const newbar = document.createElement("div");
    newbar.setAttribute("class","singleBar");
    newbar.style.height = `${15*r}px`;  
    newbar.style.borderRadius = `${5}px`;
    bars.append(newbar);
}
function createNewArray(x){
    const ele = document.querySelectorAll(".singleBar");
    for( e of ele ) e.remove();
    for(let i = 0; i < x; i++){
        const r = (Math.random()*20) + 1;
        const newbar = document.createElement("div");
        newbar.setAttribute("class","singleBar");
        newbar.style.height = `${20*r}px`;  
        newbar.style.borderRadius = `${5}px`;
        bars.append(newbar);
    }
}

let slider = document.getElementById("array-size");
slider.addEventListener("input",()=>{
    createNewArray(parseInt(slider.value));
});
let delay = 0;
let speed = document.getElementById("speed");
speed.addEventListener("input",()=>{
    delay = parseInt(speed.value);
});
function swap(el1, el2) {    
    let temp = el1.style.height;    
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}


function delayTime(t) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, t); 
    }) 
}
// bubbleSort();

function disableScreen(){
    const btns = document.querySelectorAll("button");
    for(btn of btns){
        btn.disabled = true;
    }
    document.getElementById("array-size").disabled = true;
    document.getElementById("speed").disabled = true;
}