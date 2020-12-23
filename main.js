var canvas=new fabric.Canvas("myCanvas");
var blockImageWidth=30;
var blockImageHeight=30;
var playerX= 10;
var playerY=10;
var playerObject="";

function playerUpdate(){
    fabric.Image.fromURL("player.png" , function(Img){
        playerObject=Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(playerObject);
    });
};
function newImage(getImage){
fabric.Image.fromURL(getImage,function(Img){

    blockImageObject=Img;
    blockImageObject.scaleToWidth(blockImageWidth);
    blockImageObject.scaleToHeight(blockImageHeight);
    blockImageObject.set({
        top:playerY,
        left:playerX
    });
    canvas.add(blockImageObject); 
});

}
window.addEventListener("keydown", myKeyDown);
function myKeyDown(e){
    keypressed=e.keyCode;
    console.log(keypressed);

    if (e.shiftKey==true && keypressed=='80'){
        console.log("p & shift pressed together");
    blockImageWidth=blockImageWidth+10;
    blockImageHeight=blockImageHeight+10;
document.getElementById("current_width").innerHTML=blockImageWidth;
document.getElementById("current_height").innerHTML=blockImageHeight;
    }
    if(e.shiftKey==true && keypressed=='77'){
        console.log("m & shift pressed together");
        blockImageWidth=blockImageWidth-10;
        blockImageHeight=blockImageHeight-10;
        document.getElementById("current_width").innerHTML=blockImageWidth;
        document.getElementById("current_height").innerHTML=blockImageHeight;
    }

    if(keypressed=='38'){
up();
console.log("up");
    }

    if(keypressed=='70'){
        newImage('ironman_face.png');
console.log("f");
    }

    if(keypressed=='66'){
        newImage('spiderman_body.png');
console.log("b");
    }

    if(keypressed=='76'){
        newImage('hulk_legs.png');
console.log("l");
    }

    if(keypressed=='82'){
        newImage('thor_right_hand.png');
console.log("r");
    }

    if(keypressed=='71'){
        newImage('captain_america_left_hand.png');
console.log("h");
    }  

}

