obj_x = 0;
obj_y = 0;

function preload(){
image1 = loadImage("mus.jpg");
}

function setup(){
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();
posenet = ml5.poseNet(video, modelLoaded);
posenet.on('pose', allPoses);
}

function modelLoaded(){
    console.log('model loaded successfully');
}

function allPoses(results){
    if(results.length > 0){
        console.log(results);
        obj_x = results[0].pose.nose.x-15;
        obj_y = results[0].pose.nose.y-15;
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(image1, obj_x, obj_y, 30, 30);
}

function down_img(){
    save("filtered_image.png");
}