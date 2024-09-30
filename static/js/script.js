// Get the elements
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const searchbar = document.querySelector(".search-bar");
const welcome = document.querySelector(".welcome");
const features = document.querySelector(".features");
const scrollingFeatures = document.querySelector(".scrolling-features");
const testimonials = document.querySelector(".testimonials");
const testimonialSlider = document.querySelector(".testimonial-slider");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

// Add event listeners
prevButton.addEventListener("click", () => {
  // Get the current slide
  const currentSlide = testimonialSlider.querySelector(".testimonial.active");
  // Get the previous slide
  const prevSlide = currentSlide.previousElementSibling;
  // If there is a previous slide, show it
  if (prevSlide) {
    currentSlide.classList.remove("active");
    prevSlide.classList.add("active");
  }
});

nextButton.addEventListener("click", () => {
  // Get the current slide
  const currentSlide = testimonialSlider.querySelector(".testimonial.active");
  // Get the next slide
  const nextSlide = currentSlide.nextElementSibling;
  // If there is a next slide, show it
  if (nextSlide) {
    currentSlide.classList.remove("active");
    nextSlide.classList.add("active");
  }
});

// Add event listener to search bar
searchbar.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchQuery = searchbar.querySelector('input[type="search"]').value;
  // Do something with the search query
  console.log(searchQuery);
});

// Add event listener to features
features.addEventListener("click", (e) => {
  if (e.target.classList.contains("feature")) {
    // Get the feature that was clicked
    const feature = e.target;
    // Do something with the feature
    console.log(feature);
  }
});

// Add event listener to scrolling features
scrollingFeatures.addEventListener("click", (e) => {
  if (e.target.classList.contains("scrolling-features-item")) {
    // Get the scrolling features item that was clicked
    const scrollingFeaturesItem = e.target;
    // Do something with the scrolling features item
    console.log(scrollingFeaturesItem);
  }
});

// Add event listener to testimonials
testimonials.addEventListener("click", (e) => {
  if (e.target.classList.contains("testimonial")) {
    // Get the testimonial that was clicked
    const testimonial = e.target;
    // Do something with the testimonial
    console.log(testimonial);
  }
});
// Add event listeners
prevButton.addEventListener("click", () => {
  // Get the current slide
  const currentSlide = testimonialSlider.querySelector(".testimonial.active");
  // Get the previous slide
  const prevSlide = currentSlide.previousElementSibling;
  // If there is a previous slide, show it
  if (prevSlide) {
    currentSlide.classList.remove("active");
    prevSlide.classList.add("active");
  }
});

nextButton.addEventListener("click", () => {
  // Get the current slide
  const currentSlide = testimonialSlider.querySelector(".testimonial.active");
  // Get the next slide
  const nextSlide = currentSlide.nextElementSibling;
  // If there is a next slide, show it
  if (nextSlide) {
    currentSlide.classList.remove("active");
    nextSlide.classList.add("active");
  }
});

// Add event listener to search bar
searchbar.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchQuery = searchbar.querySelector('input[type="search"]').value;
  // Do something with the search query
  console.log(searchQuery);
});

// Add event listener to features
features.addEventListener("click", (e) => {
  if (e.target.classList.contains("feature")) {
    // Get the feature that was clicked
    const feature = e.target;
    // Do something with the feature
    console.log(feature);
  }
});

// Add event listener to scrolling features
scrollingFeatures.addEventListener("click", (e) => {
  if (e.target.classList.contains("scrolling-features-item")) {
    // Get the scrolling features item that was clicked
    const scrollingFeaturesItem = e.target;
    // Do something with the scrolling features item
    console.log(scrollingFeaturesItem);
  }
});

// Add event listener to testimonials
testimonials.addEventListener("click", (e) => {
  if (e.target.classList.contains("testimonial")) {
    // Get the testimonial that was clicked
    const testimonial = e.target;
    // Do something with the testimonial
    console.log(testimonial);
  }
});
