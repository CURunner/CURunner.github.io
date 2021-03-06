const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {
var newStory = storyText

  if(customName.value !== '') {
    const name = customName.value;
newStory = newStory.replace(new RegExp('Bob', 'g'), name);

var xItem = randomValueFromArray(insertX)
var yItem = randomValueFromArray(insertY)
var zItem = randomValueFromArray(insertZ)


newStory = newStory.replace(new RegExp(':insertx:', 'g'), xItem);
newStory = newStory.replace(new RegExp(':inserty:', 'g'), yItem);
newStory = newStory.replace(new RegExp(':insertz:', 'g'), zItem);

console.log(storyText)



  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 / 13) + " stone";

    const temperature =  Math.round((94-32)*(5/9)) + " Centigrade";
    newStory = newStory.replace(new RegExp('94 fahrenheit', 'g'), temperature);
    newStory = newStory.replace(new RegExp('300 pounds', 'g'), weight);
    console.log(newStory)
  }

  story.textContent = newStory
  story.style.visibility = 'visible';
}}
