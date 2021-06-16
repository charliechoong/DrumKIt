
// document.querySelectorAll('button').addEventListener('click', function() {
//   alert('Click detected');
// });

/*
function add(num1, num2) {
  return num1 + num2;
}

function mult(num1, num2) {
  return num1 * num2;
}

function calculator(num1, num2, op) {
  return op(num1, num2);
}*/

var elements = document.querySelectorAll('button')
var audio = new Audio('sounds/crash.mp3')
for (let ele of elements) {
  ele.addEventListener('click', function() {
    produceAudio(this.innerHTML);
    produceAnimation(this.innerHTML);
  })
}

document.addEventListener('keydown', function(e) {
  produceAudio(e.key);
  produceAnimation(e.key);
})

function produceAudio(key) {
  switch (key) {
    case 'w':
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case 'a':
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case 's':
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case 'd':
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case 'j':
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case 'k':
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case 'l':
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    default:
      break;
  }
}

function produceAnimation(key) {
  var activeBtn = document.querySelector("." + key);
  activeBtn.classList.add('pressed');
  this.setTimeout(function() {
    activeBtn.classList.remove('pressed');
  }, 100)
}
var storage = window.localStorage;
storage.setItem('loved', ['Gloria', 'Feiyi']);
var info = storage.getItem('loved');
storage.setItem('loved', info + ',' + 'Jynn');
console.log(window.localStorage.loved);
