let slideIndex = 0; // Tracks the current slide index
const slides = document.querySelectorAll('.slider img'); // Selects all the images in the slider
const totalSlides = slides.length; // Gets the total number of slides

function showSlide(index) {
  const slider = document.querySelector('.slider'); // Selects the slider container
  slider.style.transform = `translateX(-${index * 100}%)`; // Translates the slider to show the current slide
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % totalSlides; // Advances to the next slide and wraps around if at the end
  showSlide(slideIndex); // Updates the slide display
}

// Automatically advance slides every 3 seconds
setInterval(nextSlide, 3000); // Sets an interval to automatically move to the next slide every 3 seconds

// Initial display of the first slide
showSlide(slideIndex); // Shows the first slide when the page loads
