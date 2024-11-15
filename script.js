// Interactive Quiz Functionality
const quizForm = document.getElementById('cookie-quiz-form');
const quizResult = document.getElementById('quiz-result');

quizForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const selectedCookie = document.querySelector('input[name="cookie"]:checked');
  
  if (selectedCookie) {
    quizResult.textContent = `You are most like a ${selectedCookie.value} cookie!`;
  } else {
    quizResult.textContent = 'Please select a cookie type!';
  }
});

// Image Carousel Functionality
let currentSlide = 0; // Track the current slide index
const slides = document.querySelectorAll('.carousel-slide'); // Get all carousel images
const totalSlides = slides.length;

function updateCarousel() {
  // Hide all slides
  slides.forEach((slide, index) => {
    slide.style.display = 'none'; 
  });

  // Show the current slide
  slides[currentSlide].style.display = 'block';
}

// Move to the next slide
function moveSlide(direction) {
  currentSlide += direction;
  
  // Loop around if we reach the end or the beginning
  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }

  updateCarousel();
}

// Initialize carousel by displaying the first slide
updateCarousel();

// API Fetching Cookie Tip
const cookieTipElement = document.getElementById('cookie-tip');

// Example API (Chuck Norris Jokes API, for fun purposes)
fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(data => {
    cookieTipElement.textContent = `Cookie Tip: ${data.value}`;  // Replace with real cookie tips in the future
  })
  .catch(error => {
    cookieTipElement.textContent = 'Sorry, we couldn\'t fetch a tip at the moment. Please try again later.';
  });
