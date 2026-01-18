
// var loader = document.getElementById('preloader');
// window.addEventListener("load", () => {
// 	loader.style.display = "none"
// })

var loader = document.getElementById('preloader');
window.addEventListener("load", () => {
  loader.style.opacity = "0";
  
  setTimeout(() => {loader.style.display = "none";}, 500);
})
