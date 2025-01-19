console.log("harry");
let boxes = document.getElementsByClassName("box");
console.log(boxes);
boxes [2].style.backgroundColor="red";
document.getElementById("box1").style.backgroundColor="black";
document.querySelector(".box").style.backgroundColor="blue"
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="black"
})