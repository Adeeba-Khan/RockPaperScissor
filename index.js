function select(){
var computer = Math.floor((Math.random()*3) +1);

var randomDiceImage ="option" + computer + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

const opt1 = document.querySelector('#rock');
const opt2 = document.querySelector('#paper');
const opt3 = document.querySelector('#scissors');
var player;
if(opt1.checked)
{
    var randomDiceImage2 ="images/option1.png";
    player=1;
}
else if(opt2.checked)
{
    var randomDiceImage2 ="images/option2.png";
    player=2;
}
else if(opt3.checked)
{
    var randomDiceImage2 ="images/option3.png";
    player=3;
}

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomDiceImage2);

if (player == computer)
       document.querySelector("h2").innerHTML="Tie!";
else if(player == 1){
        if (computer == 2)
        document.querySelector("h2").innerHTML="You lose!", computer, "covers", player;
        else
         document.querySelector("h2").innerHTML="You win!", player, "smashes", computer;
}
else if(player == 2){
        if(computer == 3)
        document.querySelector("h2").innerHTML="You lose!", computer, "cut", player;
        else
        document.querySelector("h2").innerHTML="You win!", player, "covers", computer;
}
 else if(player ==3)
        if (computer == 1)
        document.querySelector("h2").innerHTML="You lose...", computer, "smashes", player;
        else
        document.querySelector("h2").innerHTML="You win!", player, "cut", computer;
}
