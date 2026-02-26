// COUNTER PROGRAM

const IncreaseBtn = document.getElementById("inecreaseBtn");
const Reset = document.getElementById("resetBtn");
const DecreaseBtn = document.getElementById("decreaseBtn");
// const CountLabel = document.getElementById("countLabel");
let count = 0;

inecreaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}






