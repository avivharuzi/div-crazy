"use strict";

var gameOverDiv = document.getElementById("gameOver");
var main = document.getElementById("ctr");
var js_div = document.getElementById("moving");
var hits = document.getElementById("hits");
var miss = document.getElementById("miss");
var countHits = 0;
var missHits = 0;
var moveTimer;
var para;

function moveInterval() {
    moveTimer = setInterval(function(){
        js_div.style.display = "block";
        js_div.style.left =  (Math.floor(Math.random() * document.documentElement.clientWidth) + 119) + "px";
        js_div.style.top =  (Math.floor(Math.random() * document.documentElement.clientHeight) + 119) + "px";
        js_div.style.backgroundColor = "#" + (Math.floor(Math.random() * 999999));
    }, 1000)
}

function advanced() {
    missHits--;
    js_div.style.width = "30px";
    js_div.style.height = "20px";
}

function expert() {
    missHits--;
    js_div.style.width = "60px";
    js_div.style.height = "20px";
}

function noob() {
    missHits--;
    js_div.style.width = "100px";
    js_div.style.height = "50px";
}

js_div.addEventListener("click", function() {
    missHits--;
    countHits++;
    hits.innerHTML = "Hits: " + countHits;
    js_div.style.display = "none";
});

document.addEventListener("click", function() {
    missHits++;
    miss.innerHTML = "Miss: " + missHits;
    if (missHits == 31) {
        endGame();
    }
})

function endGame() {
    clearInterval(moveTimer);
    main.style.display = "none";
    gameOverDiv.style.display = "block";
    para = document.createElement("p");
    para.innerHTML = "<span>" + "GAME OVER" + "</span>" + "<br>" + "HITS NUMBER: " + countHits + "<br>" + '<button onclick="playAgain()">Play Again</button>';
    gameOverDiv.appendChild(para);
}

function playAgain() {
    gameOverDiv.removeChild(para);
    moveInterval();
    main.style.display = "block";
    gameOverDiv.style.display = "none";
    countHits = 0;
    missHits = -1;
    hits.innerHTML = "Hits: " + countHits;
    miss.innerHTML = "Miss: " + missHits;
}

moveInterval();
