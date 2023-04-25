let name1 = document.querySelector(".namejs");
let number1 = document.querySelector(".numberjs");


let namejs = document.querySelector(".name");
let numberjs = document.querySelector(".number");


name1.addEventListener("keyup",()=>{
    namejs.innerText=name1.value;
})
number1.addEventListener("keyup",()=>{
    numberjs.innerText=number1.value;
})
document.querySelector(".month-input").oninput=()=>{
    document.querySelector(".exp-month").innerText=document.querySelector(".month-input").value;
}
document.querySelector(".year-input").oninput=()=>{
    document.querySelector(".exp-year").innerText=document.querySelector(".year-input").value;
}