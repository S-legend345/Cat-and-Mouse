
var catImg, catImg2, catImg3, catImg4,  cat, mouse, mouseImg, garden, gardenImg, mouseImg2, mouseImg3, mouseImg4;

function preload() {
    gardenImg = loadImage("images/garden.png");

catImg = loadImage("images/cat1.png");
catImg2 = loadImage("images/cat2.png");
catImg3 = loadImage("images/cat3.png");
catImg4 = loadImage("images/cat4.png");
mouseImg = loadImage("images/mouse1.png");
mouseImg2 = loadImage("images/mouse2.png");
mouseImg3 = loadImage("images/mouse3.png");
mouseImg4 = loadImage("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(750, 700);
    cat.addAnimation("catStillImage", catImg);
    mouse = createSprite(250, 700);
    cat.scale = 0.2;
    mouse.addAnimation("mouseStillImage", mouseImg);
    mouse.scale = 0.2;
    /* garden = createSprite(0, 50, 1000, 800);
     garden.addImage("gardenImage", gardenImg);*/
}

function draw() {

    background(gardenImg);
   if (cat.x - mouse.x < (cat.width - mouse.width)/2 ) {
       cat.addAnimation("catLastImg", catImg4);
       cat.scale = 0.2;
       cat.x = 600;
       cat.changeAnimation("catLastImg");

       
       mouse.addAnimation("mouseLastImg", mouseImg4);
       mouse.scale = 0.15;
       mouse.changeAnimation("mouseLastImg");
   }  

    drawSprites();
}


function keyPressed(){



if (keyCode === LEFT_ARROW) {
    cat.velocityX = -5;
    cat.addAnimation("catRunning", catImg2);
    cat.changeAnimation("catRunning");

    mouse.addAnimation("mouseStand", mouseImg2);
    mouse.changeAnimation("mouseStand");
}

}
