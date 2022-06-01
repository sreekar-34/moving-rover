rover_x=10;
rover_y=10;
rover_width=100;
rover_height=100;
bagroundImage="mars.gif";
rover_image="rover.png";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");



function add(){
    baground_imgTag= new Image();
    baground_imgTag.onload= uploadBaground;
    baground_imgTag.src= bagroundImage;


    rover_imgTag= new Image();
    rover_imgTag.onload= uploadrover;
    rover_imgTag.src= rover_image;
}

function uploadBaground(){
    ctx.drawImage(baground_imgTag, 0, 0, canvas.width,canvas.height);
}


function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}


window.addEventListener("keydown",my_keydown)

function my_keydown(e){
    keyPressed= e.keyCode;
    console.log(keyPressed)
      if (keyPressed=='38'){
          up();
          console.log("up");
      }
      if (keyPressed=='40'){
          down();
          console.log("down");
      }
      if (keyPressed=='37'){
          left();
          console.log("left");
      }
      if (keyPressed=='39'){
          right();
          console.log("right");
      }

}