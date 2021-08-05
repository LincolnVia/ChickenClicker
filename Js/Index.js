var eggs = 1;
var ChickenSqueaser = 0;
var ChickenPuncher = 0;
var Quack = new Audio("Quack.mp3");

function EggClicker() {
  eggs = eggs + 1;
  document.getElementById("AmountEgg").value = eggs;
  Quack.play();
}
//Update
function update() {
  document.getElementById("AmountEgg").value = eggs;
  if (eggs == 100) {
    Quack.loop = false;
    Quack.play();
    eggs = 101;
  }
  if (eggs == 101) {
    Quack.loop = false;
    Quack.play();
    eggs = 102;
  }
  if (eggs == 102) {
    Quack.loop = false;
    Quack.play();
    eggs = 103;
  }
  if (eggs == 103) {
    Quack.loop = false;
    Quack.play();
    eggs = 104;
  }
}
function timer() {
  eggs = eggs + ChickenSqueaser + ChickenSqueaser + ChickenPuncher * 10;

  update();
}
setInterval(timer, 1000);

function buyChickenSqueaser() {
  if (eggs >= (ChickenSqueaser + 1) * 12) {
    eggs = eggs - (ChickenSqueaser + 1) * 12;
    ChickenSqueaser = ChickenSqueaser + 1;

    update();
  }
}
function buyChickenPuncher() {
  if (eggs >= (ChickenPuncher + 1) * 100) {
    eggs = eggs - (ChickenPuncher + 1) * 100;
    ChickenPuncher = ChickenPuncher + 1;

    update();
  }
}
//eggs Across Screen
