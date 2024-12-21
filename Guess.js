var num_1 = document.getElementById("num1")
var bt = document.getElementById("btn")
var re = document.getElementById("res")
var sc = document.getElementById("sc")

var score = 10
var rand = Math.floor(Math.random() * 10) + 1

bt.addEventListener("click", function () {
    var num__1 = (num_1.value)
    if (rand == num__1) {
        sc.textContent = "Score : " + score
        re.textContent = "You are Right!🙌"
        alert("Congratulations,You Won!")
    }
    if (rand != num__1) {
        score = score - 1
        sc.textContent = "Score : " + score
        re.textContent = "You are Wrong,Try Again!😔"

    }
    if (score == 0) {
        re.textContent = "You Lost!😭"
    }
    if (score < 0) {
        re.textContent = "Game Over!";
        sc.style.display = "none";
        bt.style.backgroundColor = '#BA9B45'; 
        bt.style.border = 'solid #BA9B45 2px'; 
        bt.style.cursor = 'default';

    }
})