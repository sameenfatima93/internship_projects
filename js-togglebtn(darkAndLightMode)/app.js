// var themeToggle = document.getElementById("toggle")
// var storedTheme = localStorage.getItem("theme")
// themeToggle.addEventListener("click" , () => {
// // alert("cheked")
// if(this.checked){
   
// document.documentElement.style.setProperty('--main-bg-color',"#000")
// document.documentElement.style.setProperty('--main-text-color',"#ffffffff")
    
// }else{
//    document.documentElement.style.setProperty('--main-bg-color',"#fff")
// document.documentElement.style.setProperty('--main-text-color',"#000")
// }
// })


var themeToggle = document.getElementById("toggle");
var storedTheme = localStorage.getItem("theme");

// Apply stored theme on reload (optional)
if (storedTheme === "dark") {
  document.documentElement.style.setProperty("--main-bg-color", "#000");
  document.documentElement.style.setProperty("--main-text-color", "#fff");
  themeToggle.checked = true;
}

themeToggle.addEventListener("change", function () {
  if (this.checked) {
    // Dark mode
    document.documentElement.style.setProperty("--main-bg-color", "#000");
    document.documentElement.style.setProperty("--main-text-color", "#fff");
    localStorage.setItem("theme", "dark");
  } else {
    // Light mode
    document.documentElement.style.setProperty("--main-bg-color", "#fff");
    document.documentElement.style.setProperty("--main-text-color", "#000");
    localStorage.setItem("theme", "light");
  }
});
