object_status="";
objects=[];



function preload(){
    img=loadImage('dog_cat.jpg');
}


function setup(){
  canvas=createCanvas(500, 400);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(500,400)
  video.hide();
  objectDetector=ml5.objectDetector("cocossd", modelLoaded);
}


function draw(){
    image(video, 0,  0, 500, 400);
    if(object_status != ""){  
      object_detector.detect(video, gotRuselt);
    for(var i = 0; i < objects.length; i++){
      document.getElementById("status").innerHTML="Status: Detected Object";
      document.getElementById("Number_of_objects").innerHTML="Number of objects detected are: "+objects.length;

    }   
  }
}
      
    

      function modelLoaded(){
        console.log("Model is loaded......");
        object_status=true;
    }
    
    
    function gotRuselt(error ,results){
      if(error){
        console.error(error);
      }
      else{
        console.log(results);
        objects=results;
      }
    }