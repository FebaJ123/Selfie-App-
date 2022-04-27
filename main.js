function take_snapshot(){
    console.log(img_id);
    Webcam.snap(function)
}

function start(){
    document.getElementById("textbox").innerHTML.HTML = "";
    recognition.start();
}

function take_snapshot(){
    console.log(img_id);

    Webcam.snap(function(data_uri){
    if(img_id=="selfie1"){
        document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
    }
    if(img_id=="selfie2"){
        document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
    }
    if(img_id=="selfie3"){
        document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
    }
    });
}

setTimeout(function()
{
    img_id = "selfie1";
    take_snapshot();
    speak_data = "Taking your first selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUttterance(speak_data);
    synth.speak(utterThis);
}, 5000);

setTimeout(function()
{
    img_id = "selfie2";
    take_snapshot();
    speak_data = "Taking your second selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUttterance(speak_data);
    synth.speak(utterThis);
}, 5000);

setTimeout(function()
{
    img_id = "selfie3";
    take_snapshot();
    speak_data = "Taking your third selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUttterance(speak_data);
    synth.speak(utterThis);
}, 5000);