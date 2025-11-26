const wrapper = document.querySelector(".carousel-wrapper");
const items = document.querySelectorAll(".carousel-item");
const dotsContainer = document.querySelector(".carousel-dots");

let index = 0;
let itemsPerSlide = 3;
let totalSlides = Math.ceil(items.length / itemsPerSlide);

// Create dots
for (let i = 0; i < totalSlides; i++) {
  let dot = document.createElement("span");
  if (i === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);

  dot.addEventListener("click", () => {
    index = i;
    updateCarousel();
  });
}

// Next Button
document.querySelector(".next").onclick = () => {
  index = (index + 1) % totalSlides;
  updateCarousel();
};

// Prev Button
document.querySelector(".prev").onclick = () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateCarousel();
};

// Auto Slide
setInterval(() => {
  index = (index + 1) % totalSlides;
  updateCarousel();
}, 4000);

function updateCarousel() {
  wrapper.style.transform = `translateX(-${index * 100}%)`;

  document.querySelectorAll(".carousel-dots span").forEach((d, i) => {
    d.classList.toggle("active", i === index);
  });
}
