//SOLUTION-1

var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelector("img.img1").src = `images/dice${randomNumber1}.png`;
document.querySelector("img.img2").src = `images/dice${randomNumber2}.png`;

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🥳Player 1 Wins!"
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent = "Player 2 Wins!🥳"
}else{
    document.querySelector("h1").textContent = "Draw!🚶"
}

document.getElementById("refresh").addEventListener('click',()=>{
    location.reload();
})

//SOLUTION-2

// var randomNumber1 = Math.floor(Math.random()*6) + 1;
// var randDiceImage1 = "images/dice" + randomNumber1 + ".png";
// var image1 = document.querySelectorAll("img")[0];
// image1.setAttribute("src", randDiceImage1);

// var randomNumber2 = Math.floor(Math.random()*6) + 1;
// var randDiceImage2 = "images/dice" + randomNumber2 + ".png";
// var image2 = document.querySelectorAll("img")[1];
// image2.setAttribute("src", randDiceImage2);

