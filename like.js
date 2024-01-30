var h = document.querySelector(".container")

var heart = document.querySelector("i")

h.addEventListener("dblclick", function(){
     heart.style.transform = "translate(-50%, -50%) scale(1)"
     heart.style.opacity = 1;   

     setTimeout(function(){
        heart.style.opacity = 0;
     }, 2000)
});