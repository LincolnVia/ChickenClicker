var eggs = 1;
var autoclick = 0;
var Quack = new Audio("SoundEffects/Quack.mp3");

function EggClicker() {
  eggs = eggs + 1;
  document.getElementById("AmountEgg").value = eggs;
}
function update() {
  document.getElementById("AmountEgg").value = eggs;
  if (eggs == 100) {
    Quack.play();
    setInterval(Quack.stop(), 4000);
  }
}
function timer() {
  eggs = eggs + autoclick + autoclick;

  update();
}
setInterval(timer, 1000);

function buyChickenSqueaser() {
  if (eggs >= (autoclick + 1) * 12) {
    eggs = eggs - (autoclick + 1) * 12;
    autoclick = autoclick + 1;

    update();
  }
}
