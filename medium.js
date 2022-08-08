let menu = document.getElementById('menu');

  window.addEventListener("scroll", function(){
    var scroll = window.scrollY;
    if (scroll > 300) {
        menu.style.backgroundColor = "white";
    } else{
        menu.style.backgroundColor = "rgb(255 192 23)";	
    }
  });