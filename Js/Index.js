var eggs = 0;
var autoclick = 0;
var Pullers = 1;
function EggClicker() {
  eggs = eggs + 1;
  document.getElementById("AmountEgg").value = eggs;
}
function update() {
  document.getElementById("AmountEgg").value = eggs;
}
function timer() {
  eggs = eggs + autoclick * Pullers;

  update();
}
setInterval(timer, 1000);

function buyChickenSqueaser() {
  if (eggs >= (autoclick + 1) * 12) {
    eggs = autoclick * 12 - autoclick;
    autoclick = autoclick + 1;

    update();
  }
}
