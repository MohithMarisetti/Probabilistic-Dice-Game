var player1 = Math.random();
var player2 = Math.random();
player1*=6;
player2*=6;

player1+=1;
player2+=1;

player1= Math.floor(player1);
player2= Math.floor(player2);

var images = document.querySelectorAll("img");

images[0].setAttribute("src","images/dice"+player1+".png");
images[1].setAttribute("src","images/dice"+player2+".png");

if(player1>player2)
{
  document.querySelector("h1").innerText = "🚩Player 1 Wins";
}
else if(player1<player2)
{
  document.querySelector("h1").innerText = "Player 2 Wins🚩";
}

else
{
  document.querySelector("h1").innerText = "Draw";
}
