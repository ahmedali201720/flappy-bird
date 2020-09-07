var canvas = document.getElementById("main");
canvas.addEventListener("onload",DrawBackgound);
var ctx = canvas.getContext("2d");

function DrawBackgound()
{
        var bg = new Image();
        bg.src = "main.png";
        ctx.drawImage(bg,0,0);
} 