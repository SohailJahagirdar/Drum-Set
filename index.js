for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
      var word =  this.innerHTML;
      makeSound(word);
      addAnimation(word)
    });
}

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  addAnimation(event.key)
} );


function makeSound(key) {
  
   

  switch (key) {
    case "w" : var wong = new Audio("sounds\\tom-1.mp3");
                   wong.play();
    break;

    case "a" : var aong = new Audio("sounds\\tom-2.mp3");
                   aong.play();
    break;

    case "s" : var song = new Audio("sounds\\tom-3.mp3");
                 song.play();
    break;

    case "d" : var dong = new Audio("sounds\\tom-3.mp3");
                   dong.play();
    break;

    case "j" : var jong = new Audio("sounds\\crash.mp3");
                   jong.play();
    break;

    case "k" : var kong = new Audio("sounds\\kick-bass.mp3");
                   kong.play();
    break;

    case "l" : var long = new Audio("sounds\\snare.mp3");
                   long.play();
    break;

    default: console.log(word);
    break;
  }
 }         

 function addAnimation(currentKey) {

  var word1 = document.querySelector("." + currentKey);

  word1.classList.add("pressed");

  setTimeout(function() {
    word1.classList.remove("pressed");
   }, 100);
  
  

 }

 
