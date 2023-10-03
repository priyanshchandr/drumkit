
var i=0;
while(i<document.querySelectorAll(".drum").length)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

      var buttonInnerhtml = this.innerHTML;
      console.log(buttonInnerhtml);
      makeSound(buttonInnerhtml);
      buttonAnimation(buttonInnerhtml);
    }

  );
  i++;
}

function makeSound(key)
{

  switch (key) {
    case 'w':
      var cr = new Audio("sounds/crash.mp3");
      cr.play();
      break;

    case 'a':
      var kb = new Audio("sounds/kick-bass.mp3");
      kb.play();
      break;

    case 's':
      var sn = new Audio("sounds/snare.mp3");
      sn.play();
      break;

    case 'd':
      var t1 = new Audio("sounds/tom-1.mp3");
      t1.play();
      break;

    case 'j':
      var t2 = new Audio("sounds/tom-2.mp3");
      t2.play();
      break;

    case 'k':
      var t3 = new Audio("sounds/tom-3.mp3");
      t3.play();
      break;

    case 'l':
      var t4 = new Audio("sounds/tom-4.mp3");
      t4.play();
      break;

    default: console.log("Wrong Input");

  }

}

document.addEventListener("keydown",function(event)
{
  makeSound(event.key);
  buttonAnimation(event.key);
})

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}