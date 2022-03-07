


function getScore(){
var currentGrade = document.getElementById("currentGrade").value //all are percents
var goalGrade = document.getElementById("goalGrade").value
var finalWeight = document.getElementById("finalWeight").value * 0.01
const impossibleMessages = ["EXTRA CREDIT SPONGEBOB!!! EXTRA CREDIT!!!", "Oof! But use this oof to grow as a person and do better next time!", "Maybe you can mow the professor's lawn for some extra credit?"]
const hardMessages = ["Maybe you can study with a Kahoot?", "Ask Siri for the nearest Starbucks and get studying.", "With the power of caffeine you can achieve anything.", "YouTube review videos will be your friend.", "Don't forget to get some good sleep the night of your exam."]
const easyMessages = ["This is easy money.", "Relax, go take a break and play Minecraft or something", "You got it in the bag! Go play Clash of Clans or something for a study break.", "Best advice for this class ever: Chill.", "You have time to start planning your end of the semester party.", "You deserve a sticker.", "Go get ice cream."]

var neededScore = Number(((goalGrade - (currentGrade * (1.0 - finalWeight)))/finalWeight).toPrecision(4))
console.log(neededScore)
var message = ""

if (neededScore > 100){
    message = impossibleMessages[Math.floor(Math.random()*impossibleMessages.length)];
    
}else if((neededScore <= 100) && (neededScore > 60)){
    message = hardMessages[Math.floor(Math.random()*hardMessages.length)];
}else{
    message =  easyMessages[Math.floor(Math.random()*easyMessages.length)];
}


alert(`You need at least a ${neededScore}% on your final. ${message}`)
return
}