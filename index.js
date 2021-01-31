var n1 = Math.random();
n1 = n1 * 6;
n1 = Math.floor(n1) + 1; //1-6
var img = "dice" + n1 + ".png"; //dice1.png-dice6.png
var newsrc = "images/" + img; // images/dice1,2,3,4... .png
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", newsrc);
//img1 random done
//!!!!!!!!!!!!!!!!!!!!
//img2 random start
var n2 = Math.random();
n2 = n2 * 6;
n2 = Math.floor(n2) + 1; //1-6
console.log(n1, n2);
var img2 = "dice" + n2 + ".png";
var newsrc2 = "images/" + img2; // images/dice1,2,3,4... .png
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", newsrc2);
if (n1 > n2) {
    document.querySelector("h1").innerHTML = "Player1 Wins!!";

} else if (n1 < n2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!!";
} else {
    document.querySelector("h1").innerHTML = "Draw!!";
}