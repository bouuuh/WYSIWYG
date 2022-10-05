let valueTextArea = document.querySelector(".coding-frame");
let result = document.querySelector(".result");
valueTextArea.style.resize = "none";
   
 
   

valueTextArea.addEventListener('input', function handleChange(event) {
  let nbCaracters = valueTextArea.value.length;
   let caractersBottom = result.innerText;
   let nbCaractersBottom = caractersBottom.length;

       let bar = document.querySelector(".progress-bar");
     let width = (nbCaractersBottom / 2) + "%";   
 bar.style.width = width;
        if (nbCaractersBottom <= 100) {
            bar.style.background = "green";
        }
        else if (nbCaractersBottom <= 170) {
            bar.style.background = "orange";
        }
        else if (nbCaractersBottom <= 200) {
            bar.style.background = "red";
        }



    if(nbCaractersBottom<200){
        result.innerHTML = event.target.value;
       
    }
    else if (nbCaractersBottom === 200){
      valueTextArea.setAttribute("maxlength", nbCaracters);
      
    }
   
    
  });


  //Animation on hover valueTextArea
  let movemouse = document.querySelector("#mouse-move");

  valueTextArea.onmouseout = function (event) {
    movemouse.style.display = 'none';
  };
  valueTextArea.onmouseover = function (event) {
    movemouse.style.display = 'block';
  };


  //buttons
  let strong = document.querySelector(".strong");

  strong.addEventListener('click', function addTag(){
    valueTextArea.value += '<strong>' + '</strong>';
  });

  let italic = document.querySelector(".italic");

  italic.addEventListener('click', function addTag2(){
    valueTextArea.value += '<em>' + '</em>';
  });

  //Dark mode
  let dark = document.querySelector(".dark");
  let body = document.querySelector("body");
  dark.addEventListener('click', function darkMode(){
    body.style.background = "#171717";
    body.style.color = "#fff";
    result.style.background = "#424242";
    valueTextArea.style.background = "#424242";
    result.style.color = "#fff";
    valueTextArea.style.color = "#fff";
    dark.style.background = "#000";
    dark.style.color = "#fff";
    dark.style.border = "1px solid white";
  });

  