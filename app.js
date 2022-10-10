let valueTextArea = document.querySelector(".coding-frame");
let result = document.querySelector(".result");
let bar = document.querySelector(".progress-bar");
valueTextArea.style.resize = "none";

valueTextArea.addEventListener("input", function() {
  //On donne affiche le résultat dans la Div
  let endResult = valueTextArea.value;
  result.innerHTML = endResult;

  //On fait la barre

  //Nombre de caractères en bas
  let caractersBottom = result.innerText;
  let nbCaractersBottom = caractersBottom.length;

   //Calcul de la longueur de la barre
   let width = (nbCaractersBottom / 2) + "%";
   bar.style.width = width;
   //On lui donne ses couleurs
   if (nbCaractersBottom <= 100) {
    bar.style.background = "green"; 
  }
  else if (nbCaractersBottom <= 170) {
    bar.style.background = "orange";
  }
  else if (nbCaractersBottom <= 200) {
    bar.style.background = "red";
  }

//popup
let thePopup = document.querySelector(".thenone");

  //On limite le nombre de caractère en haut
  if (nbCaractersBottom === 200){
    valueTextArea.setAttribute("maxlength", 0);
    thePopup.style.display = "block";
  }
  else if (nbCaractersBottom<200){
    valueTextArea.setAttribute("maxlength", "");
    thePopup.style.display = "none";
  }
});

//buttons
let beStrong = document.querySelector(".strong");
beStrong.addEventListener('click', function addTag(){
  valueTextArea.value += '<strong>' + '</strong>';
});

let beUnderline = document.querySelector(".underline");
beUnderline.addEventListener('click', function addTag(){
  valueTextArea.value += '<u>' + '</u>';
});

let beLinked = document.querySelector(".link");
beLinked.addEventListener('click', function addTag(){
  valueTextArea.value += '<a>' + '</a>';
});

let beImage = document.querySelector(".img");
beImage.addEventListener('click', function addTag(){
  valueTextArea.value += '<img>' + '</img>';
});

let beItalic = document.querySelector(".italic");
beItalic.addEventListener('click', function addTag2(){
  valueTextArea.value += '<em>' + '</em>';
});

let beClear = document.querySelector(".clear");
beClear.addEventListener('click', function clearText(){
  valueTextArea.value = "";
  result.innerText = "";
  bar.style.width = 0;
  thePopup.style.display = "none";
  valueTextArea.setAttribute("maxlength", "");
});

  //Animation on hover valueTextArea
  let movemouse = document.querySelector("#mouse-move");

  valueTextArea.onmouseout = function (event) {
    movemouse.style.display = 'none';
  };
  valueTextArea.onmouseover = function (event) {
    movemouse.style.display = 'block';
  };


  //Dark mode
  let darkBtn = document.querySelector(".btn-dark");
  let body = document.querySelector("body");
  let all = document.querySelector("*");
  
  darkBtn.addEventListener('click', function darkMode(){
  darkBtn.classList.toggle("dark");
  body.classList.toggle("dark2");
  beStrong.classList.toggle("dark");
  beItalic.classList.toggle("dark");
  beUnderline.classList.toggle("dark");
  beLinked.classList.toggle("dark");
  beImage.classList.toggle("dark");
  valueTextArea.classList.toggle("dark");
  result.classList.toggle("dark");
  beClear.classList.toggle("dark");
  });
