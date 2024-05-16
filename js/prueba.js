let btn = document.getElementById("btn")
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let div = document.getElementById("cont")

btn.addEventListener("click",() =>{
    div.style.left = "300px"
    div.style.transition = "1s"
})

btn1.addEventListener("click",() =>{
    div.style.left = "-5px"
    div.style.transition = "1s"
})

btn2.addEventListener("click",() =>{
    div.style.top = "300px"
    div.style.transition = "1s"
})

btn3.addEventListener("click",() =>{
    div.style.top = "-5px"
    div.style.transition = "1s"
})