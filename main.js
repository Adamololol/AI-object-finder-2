video = "";
stat = "";

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
 
    video = createCapture(VIDEO);
	video.size(640, 420);
    video.center();
}
function preload(){
    video = createCapture(VIDEO);
	video.size(800, 400);
    video.center();
}
function draw(){
    image(video, 0, 0, 480, 380);
}
function start(){
    ObjectDetector = ml5.ObjectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded!");
}