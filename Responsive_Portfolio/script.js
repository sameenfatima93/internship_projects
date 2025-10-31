
function toggleText() {
  let moreText = document.getElementById("moreText");
  let btn = document.getElementById("myBtn");

  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "inline";
    btn.innerText = "Read Less";
  } else {
    moreText.style.display = "none";
    btn.innerText = "Read More";
  }
}


// const slider = document.querySelector(".slider");
// const prev = document.querySelector(".prev");
// const next = document.querySelector(".next");

// let currentSlide = 0;

// next.addEventListener("click", () => {
//   const totalCards = document.querySelectorAll(".card").length;
//   const cardWidth = document.querySelector(".card").offsetWidth + 20; // 20 for margin
//   const visibleCards = window.innerWidth <= 768 ? 1 : window.innerWidth <= 992 ? 2 : 3;
//   const maxSlide = Math.ceil(totalCards / visibleCards) - 1;

//   if (currentSlide < maxSlide) currentSlide++;
//   else currentSlide = 0;

//   slider.style.transform = `translateX(-${currentSlide * cardWidth * visibleCards}px)`;
// });

// prev.addEventListener("click", () => {
//   const totalCards = document.querySelectorAll(".card").length;
//   const cardWidth = document.querySelector(".card").offsetWidth + 20;
//   const visibleCards = window.innerWidth <= 768 ? 1 : window.innerWidth <= 992 ? 2 : 3;
//   const maxSlide = Math.ceil(totalCards / visibleCards) - 1;

//   if (currentSlide > 0) currentSlide--;
//   else currentSlide = maxSlide;

//   slider.style.transform = `translateX(-${currentSlide * cardWidth * visibleCards}px)`;
// });


const slider = document.querySelector(".slider");
const cards = document.querySelectorAll(".card");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentSlide = 0;

function getVisibleCards() {
  if (window.innerWidth <= 768) return 1;
  if (window.innerWidth <= 992) return 2;
  return 3; // xl screen me 3
}

function updateSlider() {
  const cardWidth = cards[0].offsetWidth + 20; // margin ke sath
  const visibleCards = getVisibleCards();
  const totalCards = cards.length;

  // Max slide count — last visible set se aage na jaaye
  const maxSlide = Math.ceil(totalCards - visibleCards);

  if (currentSlide > maxSlide) currentSlide = 0;
  if (currentSlide < 0) currentSlide = maxSlide;

  slider.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
}

next.addEventListener("click", () => {
  currentSlide++;
  updateSlider();
});

prev.addEventListener("click", () => {
  currentSlide--;
  updateSlider();
});

// Resize pe responsive fix
window.addEventListener("resize", updateSlider);

function goProjectPage() {
  window.location.href = "project.html"

}

document.getElementById("cvButton").addEventListener("click", function (e) {
  e.preventDefault();
  const link = document.createElement("a");
  link.href = "updated_cv.pdf";
  link.download = "ubdatet_cv.pdf";
  link.click();
});

function goToProject() {
            window.location.href = "project.html"

        }