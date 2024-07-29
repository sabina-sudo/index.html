let images = document.querySelectorAll("figure");
console.log(images);

let next = document.querySelector("nav #next");
console.log(next);

let prev = document.querySelector("nav #prev");
let i = 0;

let playPause = document.querySelector("nav #play-pause");
console.log(playPause);
let interval;
let icon;
console.log(icon);
/***bouton random*** */
let random = document.getElementById("random");
console.log(random);
let aleatoire;
//let this;
/************************************************* */
next.addEventListener("click", clickNext);

function clickNext() {
  images[i].classList.remove("active");
  listRond[i].classList.remove("selected");
  i++;
  if (i == images.length) {
    i = 0;
  }
  images[i].classList.add("active");
  listRond[i].classList.add("selected");
  console.log(images.length);
}

prev.addEventListener("click", clickPrev);

function clickPrev() {
  images[i].classList.remove("active");
  listRond[i].classList.remove("selected");
  i--;
  if (i == -1) {
    i = images.length - 1;
  }
  images[i].classList.add("active");
  listRond[i].classList.add("selected");
}

/*******************playPause******************* */

playPause.addEventListener("click", clickplay);

function clickplay() {
  icon = document.querySelector("#play-pause i");
  if (icon.classList.contains("fa-play")) {
    //playPause.innerHTML = `<i class="fas fa-pause"></i>`;
    playPause.innerHTML = `<i class="fas fa-pause"></i>`;
    interval = setInterval(clickNext, 1000);
  } else {
    clearInterval(interval);
    playPause.innerHTML = `<i class="fas fa-play"></i>`;
  }
}

random.addEventListener("click", clickAleatoire);

function clickAleatoire() {
  do {
    aleatoire = Math.floor(Math.random() * 6);
  } while (i == aleatoire);

  console.log(aleatoire);
  console.log(images[aleatoire]);
  images[i].classList.remove("active");
  listRond[i].classList.remove("selected");
  i = aleatoire;
  images[i].classList.add("active");
  listRond[i].classList.add("selected");
}
/***************press-clavier**************************** */

document.addEventListener("keydown", pressright);

function pressright(event) {
  console.log(event);
  let code = event.keyCode;
  console.log(`Numéro est: ${code}`);

  if (code == "39") {
    clickNext();
    //alert(`Vous venez presser la touche right`);
  } else if (code == "37") {
    //alert(`Vous venez presser la touche left`);
    clickPrev();
  } else if (code == "13") {
    clickplay();
  }
}

/****************************************** */

for (let i = 0; i < images.length; i++) {
  let ol = document.getElementById("slider-dots");
  let rond = document.createElement("li");
  // rond.addEventListener("click", () => affichage(i));
  rond.addEventListener("click", function () {
    affichage(i);
  });
  ol.appendChild(rond);
  //let listRond[i]=this;
}

let listRond = document.querySelectorAll("li");

listRond[0].classList.add("selected");
console.log(listRond[0]);

function affichage(index) {
  console.log(index);

  listRond[i].classList.remove("selected");
  images[i].classList.remove("active");

  i = index;

  listRond[i].classList.add("selected");
  images[i].classList.add("active");
}
console.log(listRond);
