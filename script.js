let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slider img');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 1) {
    slideIndex = document.querySelectorAll('.slider img').length;
  }
  showSlides();
}

function nextSlide() {
  slideIndex++;
  if (slideIndex > document.querySelectorAll('.slider img').length) {
    slideIndex = 1;
  }
  showSlides();
}

showSlides(); // Start the slideshow
