canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_width=120;
car1_height=70;
car1_image="race_car1.png";
car1_x=10;
car1_y=10;

car2_width=120;
car2_height=70;
car2_image="race_car2.png";
car2_x=10;
car2_y=100;

background_image="canvas.image.jpg";

function add(){
    background_imageTag=new Image();
    background_imageTag.onload=upload_background;
    background_imageTag.src=background_image;

    car1_imageTag=new Image();
    car1_imageTag.onload=upload_car1;
    car1_imageTag.src=car1_image;

    car2_imageTag=new Image();
    car2_imageTag.onload=upload_car2;
    car2_imageTag.src=car2_image;
}

function upload_background(){
    ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
}
function upload_car1(){
    ctx.drawImage(car1_imageTag,0,0,car1_width,car1_height);
}
function upload_car2(){
    ctx.drawImage(car2_imageTag,0,0,car2_width,car2_height);
}

canvas.addEventListner("keydown",my_keydown)
function my_keydown(){
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if(keyPressed=='38'){
        car1_up();
        console.log("up");
    }
    if(keyPressed=='40'){
        car1_down();
        console.log("down");
    }
    if(keyPressed=='37'){
        car1_left();
        console.log("left");
    }
    if(keyPressed=='39'){
        car1_right();
        console.log("right");
    }
    if(keyPressed=='87'){
        car2_up();
        console.log("w");
    }
    if(keyPressed=='83'){
        car2_down();
        console.log("s");
    }
    if(keyPressed=='65'){
        car2_left();
        console.log("a");
    }
    if(keyPressed=='68'){
        car2_right();
        console.log("d");
    }
}

