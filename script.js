function play() {
  var computer = Math.floor(Math.random() * 3) + 1;

  var choose = document.getElementsByName("user-input");
  var selected;
  for (let c of choose) {
    if (c.checked) {
      selected = c.value;
    }
  }

  var s = Number(selected);

  if (s === computer) {
    document.getElementsByTagName("h1")[0].innerText = "DRAW";
  } else if (s === 1 && computer === 3) {
    document.getElementsByTagName("h1")[0].innerText = "You win";
  } else if (s === 2 && computer === 1) {
    document.getElementsByTagName("h1")[0].innerText = "You win";
  } else if (s === 3 && computer === 2) {
    document.getElementsByTagName("h1")[0].innerText = "You win";
  }

  if (s === computer) {
    document.getElementsByTagName("h1")[0].innerText = "DRAW";
  } else if (computer === 1 && s === 3) {
    document.getElementsByTagName("h1")[0].innerText = "Computer win";
  } else if (computer === 2 && s === 1) {
    document.getElementsByTagName("h1")[0].innerText = "Computer win";
  } else if (computer === 3 && s === 2) {
    document.getElementsByTagName("h1")[0].innerText = "Computer win";
  }

  if (computer === 1) {
    document.getElementById("computer").setAttribute("src", "images/rock.png");
  } else if (computer === 2) {
    document.getElementById("computer").setAttribute("src", "images/paper.png");
  } else if (computer === 3) {
    document
      .getElementById("computer")
      .setAttribute("src", "images/scissor.png");
  }
  if (s === 1) {
    document.getElementById("player").setAttribute("src", "images/rock.png");
  } else if (s === 2) {
    document.getElementById("player").setAttribute("src", "images/paper.png");
  } else if (s === 3) {
    document.getElementById("player").setAttribute("src", "images/scissor.png");
  }
}
