




//new Date(SECONDS * 1000).toISOString().substr(11, 8)


let startButton = document.getElementById('butterflybutton')
startButton.addEventListener('click', startTimer)
let timeLeft = 0

let nav = document.querySelector('.nav');
let timerLabel = document.getElementById("timertext")
let link = document.getElementById("exitlinkbutton")


    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
   {
   
    alert('Firefox or Safari are recommended for this feature.');
   }
   else if(navigator.userAgent.indexOf("Edg") != -1 )
   {
    alert('Firefox or Safari are recommended for this feature.');
   }
   else if(navigator.userAgent.indexOf("Chrome") != -1 )
   {
   alert('Firefox or Safari are recommended for this feature.');
   }
   else if(navigator.userAgent.indexOf("Safari") != -1)
   {
  alert('To ensure that sound plays in Safari, please click on Safari -> Settings for tools.stridelength.com -> Allow Auto Play with audio');
   }
   else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
   {
        console.log('Firefox');
   }
   else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
   {
    alert('Please do not use IE for anything. Ever. I understand change is hard but you have to learn to let go of the past. ');
   }  
   else 
   {
     console.log('unknown');
   }
   

function startTimer(){


    
    let hoursVal = document.getElementById('hoursinput').value
    let minutesVal = document.getElementById('minutesinput').value
    let secondsVal = document.getElementById('secondsinput').value
timeLeft = (hoursVal * 60 * 60) + (minutesVal * 60) + secondsVal
var displayString = new Date(timeLeft * 1000).toISOString().slice(11, 19);
if(timeLeft <= 0){
alert("Please set the timer.")
}else{


console.log(timeLeft)
link.style.display = "block"
nav.style.display = "none"
document.getElementById("overlaydiv").style.display = "none"
timerLabel.style.display = "revert"
console.log("Starting timer")
displayString = new Date(timeLeft * 1000).toISOString().slice(11, 19);
console.log(displayString)
timertext.innerHTML = displayString
setTimeout(tick, 1000);
}
}

function tick(){

if(timeLeft <= 0){
    //alarm
    displayString = new Date(timeLeft * 1000).toISOString().slice(11, 19);
    timertext.innerHTML = displayString
alarm()
}else{
//tick down 
timeLeft -= 1
console.log(timeLeft)
displayString = new Date(timeLeft * 1000).toISOString().slice(11, 19);
timertext.innerHTML = displayString

setTimeout(tick, 1000);


}



}
let audio = document.getElementById('alertsound')
function alarm(){

  audio.play();
    timertext.style.color = "#ff0000";
    
    

 
    setTimeout(changeColor, 800);


}

function changeColor(){
    timertext.style.color = "#FFFFFF";
    setTimeout(alarm, 800);
}










