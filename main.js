console.log('linked')

let textEl = document.getElementById("message")
let articleLeft = document.getElementById("left")
let articleRight = document.getElementById("right")
textEl.addEventListener("keyup", function(event){
    console.log("clicked me!")
    articleLeft.innerHTML = event.target.value;
    articleRight.innerHTML = event.target.value;
})