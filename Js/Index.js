var eggs = 0;
var autoclick = 0;

function EggClicker() {
  eggs = eggs + 1;
  document.getElementById("AmountEgg").value = eggs;
}
function update() {
  document.getElementById("AmountEgg").value = eggs;
}
function timer() {
  eggs = eggs + autoclick;

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
