let valueTextArea = document.querySelector(".coding-frame");
let result = document.querySelector(".result");

valueTextArea.addEventListener('input', function handleChange(event) {
   result.innerHTML = event.target.value;
   let nbCaracters = valueTextArea.value.length;
    let bar = document.querySelector(".progress-bar");
    let width = (nbCaracters / 2) + "%";
    bar.style.width = width;
        if (nbCaracters <= 100) {
            bar.style.background = "green";
        }
        else if (nbCaracters <= 170) {
            bar.style.background = "orange";
        }
        else if (nbCaracters <= 200) {
            bar.style.background = "red";
        }
  });

  let mousemove = document.querySelector("#mouse-move");

  window.addEventListener("mousemove", (e) =>{
    mousemove.style.left = e.pageX + "px";
  });
