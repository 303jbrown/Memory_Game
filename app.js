const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}
let firstColor;
let secondColor;
let firstPick = null;
let secondPick =null;
// TODO: Implement this function!

function handleCardClick(event) {
   // once pick one and 2 have been selected it will go to the function to determine if it is a match
    if (firstPick && secondPick){
        determinMatch(firstColor, secondColor);
    //if not both card have been selected     
    }else
    // if first pick is empty it know it is the first click of the match and sotres information 
    if (firstPick === null){
    firstPick = event.target;
    //pulls out the class of the card
    firstColor = firstPick.getAttribute('class');
    //changes the color of the card when it is clicked on
    firstPick.style.backgroundColor = firstColor;
    //if the first pick already has been selected 
    }else if(secondPick === null){
    //pulls out the class of the card
        secondPick = event.target;
     //changes the color of the card when it is clicked on
        secondColor= secondPick.getAttribute('class');
      //changes the color of the card when it is clicked on
        secondPick.style.backgroundColor = secondColor;
    }
}
//once two cards have been selected this function will exicute 
function determinMatch(color1, color2){
  //if the functions are a match the style remain their color and they are reset to null  
  if(color1 === color2){
    firstPick = null;
    secondPick = null;
    //if the functions are not a match the background is returned to white to mimic a card fliped backover and they are reset to null
}else{
  //this should timeout and occur on it own after .5 second (this is not functioning correctly and I am not sure why)
    setTimeout(function (){
    firstPick.style.backgroundColor = 'white';
    secondPick.style.backgroundColor = 'white';
    firstPick = null;
    secondPick = null;
    },500);
}
}

//    }else if(count=2){
//     secondPick =event.target;
//     count++;
//     secondColor = secondPick.getAttribute('class');
//     secondPick.style.backgroundColor = secondColor;
//     console.log(`You picked ${secondColor} on # ${count}`);

//   
createDivsForColors(shuffledColors);
