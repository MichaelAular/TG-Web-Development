let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i=0;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }


  if (n===0) {document.getElementById("setColor").style.color = "#7a0b0e"}
  if (n===1) {document.getElementById("setColor").style.color = "#78b9cf"}
  if (n===2) {document.getElementById("setColor").style.color = "#9a1c02"}
  if (n===3) {document.getElementById("setColor").style.color = "#b93a60"}
  if (n===4) {document.getElementById("setColor").style.color = "#0b2054"}
  if (n===5) {document.getElementById("setColor").style.color = "#46c2da"}
  if (n===6) {document.getElementById("setColor").style.color = "#7a0b0e"}
  if (n===7) {document.getElementById("setColor").style.color = "#78b9cf"}

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}

