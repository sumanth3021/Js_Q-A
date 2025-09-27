    let buttons = document.getElementsByClassName("toggleBtn");
    let answers = document.getElementsByClassName("answer");

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].onclick = function () {
        if (answers[i].style.display === "block") {
          answers[i].style.display = "none";
          buttons[i].textContent = "+";
        } else {
          answers[i].style.display = "block";
          buttons[i].textContent = "-";
        }
      };
    }