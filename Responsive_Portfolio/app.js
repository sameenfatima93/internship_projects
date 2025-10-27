
function toggleText() {
  let moreText = document.getElementById("moreText");
  let btn = document.getElementById("myBtn");

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    btn.innerText = "Read Less";
  } else {
    moreText.style.display = "none";
    btn.innerText = "Read More";
  }
}
