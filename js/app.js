
  // generate function
  function getColor () {
    return '#' + Math.random().toString(16).slice(2,8);
  }

  // set background color style
  function setBackground () {
      var bgColor = getColor();
      document.body.style.background = bgColor;
      document.getElementById("color-text").innerHTML = "Current color is " + bgColor;
  }

  // call function when clicked
  document.body.onkeyup = function(e) {
    if (e.keyCode == 32) {
        setBackground();
    }
  }
