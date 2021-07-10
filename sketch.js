 var canvas,bg;
 var together;
 var tom,jerry;
 var tomImage1,tomImage2,tomImage3,tomImage4;
 var jerryImage1,jerryImage2,jerryImage3,jerryImage4;

function preload() {
 bg = loadImage("images/garden.png");
 tomImage1 = loadImage("images/cat1.png");
 tomImage2 = loadImage("images/cat2.png");
 tomImage3 = loadImage("images/cat3.png");
 tomImage4 = loadImage("images/cat4.png");
 jerryImage1 = loadImage("images/mouse1.png");
 jerryImage2 = loadImage("images/mouse2.png");
 jerryImage3 = loadImage("images/mouse3.png");
 jerryImage4 = loadImage("images/mouse4.png");
 
}

function setup(){
    createCanvas(1000,800);
    
    tom = createSprite(870,600);
    tom.addImage(tomImage1);
    tom.scale = 0.2;

    jerry = createSprite(370,600);
    jerry.addImage(jerryImage1);
    jerry.scale = 0.15;

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
     if(tom.x - jerry.x < (tom.width - jerry.width)/2){
       tom.velocityX = 0;
       tom.addImage(tomImage4);
       tom.x =250;
       tom.scale=0.2;
       tom.changeImage(tomImage4);
       jerry.addImage(jerryImage1);
       jerry.scale=0.15;
       jerry.changeImage(jerryImage3);
     }
    drawSprites();
}


function keyPressed(){
  if(keyCode === LEFT_ARROW){
      jerry.addImage(jerryImage3);
      jerry.changeImage(jerryImage3);
      jerry.frameDelay = 25;

      tom.velocityX = -5;
      tom.addImage(tomImage2);
      tom.changeImage(tomImage1);

  }
     


}
