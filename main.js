function preload(){

}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(310,250);
    video = createCapture(VIDEO);
    video.hide();
    cor = "";
}

function filter_tint(){
    cor = document.getElementById("color_name").value;
}

function draw(){
    image(video,0,0,640,480);
    circle(615,235,47,63);
    circle(615,25,47,63);
    circle(615,455,47,63);
    circle(25,235,47,63);
    circle(25,25,47,63);
    circle(25,455,47,63);
    circle(325,455,47,63);
    circle(325,25,47,63);
}

function take_snapshot(){
    save('foto.png');
}