text_input=""
function setup(){
    canvas=createCanvas(450,450)
    canvas.position(550,250)
    webcam=createCapture(VIDEO)
    webcam.hide()
}
function draw(){
    image(webcam,0,0,450,450)

}
function start(){
    object1=ml5.objectDetector("cocossd",modelLoaded)
    document.getElementById("status").innerHTML="status : status Detecting"
    text_input=document.getElementById("text").value
    

}
function modelLoaded(){
    status=true
}