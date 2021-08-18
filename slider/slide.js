var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
 
}

var slideIndex_2 = 1;
showSlides_2(slideIndex_2);

// Next/previous controls
function plusSlides_2(e) {
  showSlides_2(slideIndex_2 += e);
  console.log("click")
}

// Thumbnail image controls
function currentSlide_2(e) {
  showSlides_2(slideIndex_2 = e);
}

function showSlides_2(e) {
  var x;
  var slides_2 = document.getElementsByClassName("mySlides_2");

  if (e > slides_2.length) {slideIndex_2 = 1}
  if (e < 1) {slideIndex_2 = slides_2.length}
  for (x = 0; x < slides_2.length; x++) {
      slides_2[x].style.display = "none";
  }

  slides_2[slideIndex_2-1].style.display = "block";
 
}