function setup(){
    canvas=createCanvas(400,400);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotPoses)
}

function modelLoaded(){
    console.log("Model is loaded")
}

function draw(){
    image(video,0,0,400,400)
    
    image(clown_nose, noseX, noseY, 30, 30);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results)
        noseX = results[0].pose.nose.x - 140;
        noseY = results[0].pose.nose.y - 90;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

noseX=0;
noseY=0;

function preload(){
clown_nose = loadImage('https://i.postimg.cc/FRCgyNBB/c-HJpdm-F0-ZS9sci9pb-WFn-ZXMvd2-Vic2l0-ZS8y-MDIz-LTA5-L3-Jhd3-Bpe-GVs-X29m-Zmlj-ZV8y-NF9jd-XJse-V9ib-GFja19td-XN0-YWNo-ZV9p.webp')
}