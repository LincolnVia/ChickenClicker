var eggs = 1;
var ChickenSqueaser = 0;
var ChickenPuncher = 0;
var ChickenStabber = 0;
var Fork = 1;
var Prestige = 1;
var Quack = new Audio("Quack.mp3");

function EggClicker() {
  eggs = eggs + 1 * Fork * Prestige;
  document.getElementById("AmountEgg").value = eggs;
  Quack.play();
}
function timer() {
  eggs =
    eggs +
    ChickenSqueaser +
    ChickenSqueaser +
    ChickenPuncher * 10 +
    ChickenStabber * 100 * Prestige;

  update();
}
//Update
function update() {



  document.getElementById("AmountEgg").value = eggs;
  document.getElementById("ForkCost").value = Fork * 5;
  document.getElementById("PuncherCost").value = ChickenPuncher * 200;
  document.getElementById("SqueaserCost").value = ChickenSqueaser * 24;
  document.getElementById("StabberCost").value = ChickenStabber * 2000;

  document.getElementById("Eps").value =
    (ChickenSqueaser + ChickenPuncher * 10 + ChickenStabber * 100) * Prestige +
    "  Eggs Per Second";
  
  

   }

}

function StopCrash() {
  localStorage.setItem("Prestige", Prestige);
}

function AutoSave() {
  localStorage.setItem("eggs", eggs);
  localStorage.setItem("Sqeaser", ChickenSqueaser);
  localStorage.setItem("Puncher", ChickenPuncher);
  localStorage.setItem("Stabber", ChickenStabber);
  localStorage.setItem("Fork", Fork);
  localStorage.setItem("Prestige", Prestige);



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
function buyChickenStabber() {
  if (eggs >= (ChickenStabber + 1) * 1000) {
    eggs = eggs - (ChickenStabber + 1) * 1000;
    ChickenStabber = ChickenStabber + 1;

    update();
  }
}

function buyFork() {
  if (eggs >= (Fork + 1) * 5) {
    eggs = eggs - (Fork + 1) * 5;
    Fork = Fork + 1;

    update();
  }
}
function PrestigeUp() {
  if (eggs >= (Prestige + 1) * 50000) {
    eggs = eggs - eggs;
    Prestige = Prestige + 1;
     ChickenPuncher = ChickenPuncher - ChickenPuncher;
    ChickenSqueaser = ChickenSqueaser - ChickenSqueaser;
    Fork = Fork - Fork + 1;
    ChickenStabber = ChickenStabber - ChickenStabber;


    update();
  }
}
  setInterval(timer, 1000);
function Save() {
  localStorage.setItem("eggs", eggs);
  localStorage.setItem("Sqeaser", ChickenSqueaser);
  localStorage.setItem("Puncher", ChickenPuncher);
  localStorage.setItem("Stabber", ChickenStabber);
  localStorage.setItem("Fork", Fork);
  localStorage.setItem("Prestige", Prestige);
}
function Load() {
  eggs = localStorage.getItem("eggs");
  eggs = parseInt(eggs);
  Prestige = localStorage.getItem("Prestige");
  Prestige = parseInt(Prestige);

  Fork = localStorage.getItem("Fork");
  Fork = parseInt(Fork);
  ChickenStabber = localStorage.getItem("Stabber");
  ChickenStabber = parseInt(ChickenStabber);
  ChickenSqueaser = localStorage.getItem("Sqeaser");
  ChickenSqueaser = parseInt(ChickenSqueaser);
  ChickenPuncher = localStorage.getItem("Puncher");
  ChickenPuncher = parseInt(ChickenPuncher);

  document.getElementById("AmountEgg").value = eggs;
}
