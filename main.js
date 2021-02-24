var canvas=new fabric.Canvas("myCanvas");
var p_x=20,p_y=20;
var player="";
var block_w=30,block_h=30;
var block_image="";
function playerhere() {
  fabric.Image.fromURL("mario.png",
  function (img) {
  player=img;
player.scaleToWidth(175);
player.scaleToHeight(175);
player.set(
    {
top:p_y,left:p_x
}
);
canvas.add(player);    
  }
  );  
}
function blocks(getImage) {
  fabric.Image.fromURL(getImage,
  function (img) {
  block_image=img;
block_image.scaleToWidth(block_w);
block_image.scaleToHeight(block_h);
block_image.set(
    {
top:p_y,left:p_x
}
);
canvas.add(block_image);    
  }
  );  
}
window.addEventListener("keydown",key1);
function key1(e) {
   pressed=e.keyCode;
   console.log("keyPressedIs"+pressed);
   if (pressed == '38') {
     up();
       console.log("up arrow");
   }

    if (pressed == '40') {
       console.log("down arrow");
       down();
   }

    if (pressed == '39') {
       console.log("right arrow");
       right();
   }

    if (pressed == '37') {
       console.log("left arrow");
       left();
   }
   if (pressed == '87') {
     console.log("w");
     blocks("wall.jpg");
   }
   if (pressed == '71') {
     console.log("g");
     blocks("ground.png");
   }
   if (pressed == '76') {
     console.log("l");
     blocks("light_green.png");
   }
   if (pressed == '84') {
     console.log("t");
     blocks("trunk.jpg");
   }
   if (pressed == '82') {
     console.log("r");
     blocks("roof.jpg");
   }
   if (pressed == '89') {
     console.log("y");
     blocks("yellow_wall.png");
   }
   if (pressed == '68') {
     console.log("d");
     blocks("dark_green.png");
   }
   if (pressed == '67') {
     console.log("c");
     blocks("cloud.jpg");
   }
}
function left() {
   p_x=p_x-block_w;
canvas.remove(player);
playerhere();
}
function up() {
p_y=p_y-block_h;
canvas.remove(player);
playerhere(); 
}
function down() {
  p_y=p_y+block_h;
canvas.remove(player);
playerhere();
}
function right() {
 p_x=p_x+block_w;
canvas.remove(player);
playerhere();  
}