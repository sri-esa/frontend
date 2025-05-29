const dcrsbtn= document.getElementById("b1");
const rstbtn= document.getElementById("b2");
const incrsbtn= document.getElementById("b3");
const cntlbl= document.getElementById("count");

let count=0;

incrsbtn.onclick = function(){
    count++;
    cntlbl.textContent = count;
}
dcrsbtn.onclick = function(){
    count--;
    cntlbl.textContent = count;
}
rstbtn.onclick = function(){
    count=0;
    cntlbl.textContent = count;
}

