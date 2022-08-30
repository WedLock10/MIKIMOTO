
//menu btn
function myFunction() {
  var x = document.querySelector(".navlinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};

//slide-show
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("myClass");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 2 seconds
return;
}


//footer accordion
var acc = document.getElementsByClassName("drop");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
var info = this.nextElementSibling;
    if (info.style.display === "block") {
      info.style.display = "none";
    } else {
      info.style.display = "block";
    }
  });
  
}
