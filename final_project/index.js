// const carouselWrapper = document.querySelector(".my-carousel-wrapper");
// const prevBtn = document.querySelector(".my-carousel-btn.prev");
// const nextBtn = document.querySelector(".my-carousel-btn.next");
// const dotsContainer = document.querySelector(".my-carousel-dots");
// const cards = document.querySelectorAll(".my-slide");

// let index = 0;
// let cardsPerView = window.innerWidth < 768 ? 1 : 3; // Responsive
// let totalSlides = Math.ceil(cards.length / cardsPerView);

// // Create dots
// dotsContainer.innerHTML = "";
// for (let i = 0; i < totalSlides; i++) {
//     const dot = document.createElement("span");
//     if (i === 0) dot.classList.add("active");
//     dotsContainer.appendChild(dot);
// }
// const dots = dotsContainer.querySelectorAll("span");

// // Update Carousel
// function updateCarousel() {
//     const translateX = -(index * (100 / totalSlides));
//     carouselWrapper.style.transform = `translateX(${translateX}%)`;

//     dots.forEach(dot => dot.classList.remove("active"));
//     dots[index].classList.add("active");
// }

// // Next
// nextBtn.addEventListener("click", () => {
//     index = (index + 1) % totalSlides;
//     updateCarousel();
// });

// // Prev
// prevBtn.addEventListener("click", () => {
//     index = (index - 1 + totalSlides) % totalSlides;
//     updateCarousel();
// });

// // Auto Slide
// setInterval(() => {
//     index = (index + 1) % totalSlides;
//     updateCarousel();
// }, 3000);

// // Update on resize
// window.addEventListener("resize", () => {
//     cardsPerView = window.innerWidth < 768 ? 1 : 3;
//     totalSlides = Math.ceil(cards.length / cardsPerView);
//     index = 0; // Reset index on resize
//     // Recreate dots
//     dotsContainer.innerHTML = "";
//     for (let i = 0; i < totalSlides; i++) {
//         const dot = document.createElement("span");
//         if (i === 0) dot.classList.add("active");
//         dotsContainer.appendChild(dot);
//     }
//     updateCarousel();
// });

const carouselWrapper = document.querySelector(".my-carousel-wrapper");
const cards = document.querySelectorAll(".my-slide");

let index = 0;
const totalCards = cards.length;
let cardsPerView = window.innerWidth < 768 ? 1 : 3;

// Update Carousel Function
function updateCarousel() {
    const translateX = -(index * (100 / cardsPerView));
    carouselWrapper.style.transform = `translateX(${translateX}%)`;
}

// Auto-slide every 5 seconds
setInterval(() => {
    index++;
    if (index > totalCards - cardsPerView) {
        index = 0; // loop back to start
    }
    updateCarousel();
}, 5000);

// Responsive adjustment
window.addEventListener("resize", () => {
    cardsPerView = window.innerWidth < 768 ? 1 : 3;
    if (index > totalCards - cardsPerView) index = 0;
    updateCarousel();
});

