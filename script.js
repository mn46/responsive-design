// making burger menu work

window.addEventListener("DOMContentLoaded", start);
window.addEventListener("resize", start);

function start() {
  console.log("start");
  if (window.innerWidth >= 813) {
    document.querySelector("#dropdown_menu").classList.remove("hidden");
    document.querySelector("#burger_menu").classList.add("hidden");
  } else {
    document.querySelector("#burger_menu").classList.remove("hidden");
    document.querySelector("#dropdown_menu").classList.add("hidden");
    document.querySelector("#burger_menu").addEventListener("click", openDropdown);
  }
}

function openDropdown() {
  console.log("open dropdown");

  this.removeEventListener("click", openDropdown);
  document.querySelector("#dropdown_menu").classList.remove("hidden");
  this.addEventListener("click", closeDropdown);
}

function closeDropdown() {
  console.log("close dropdown");
  this.removeEventListener("click", closeDropdown);
  document.querySelector("#dropdown_menu").classList.add("hidden");
  this.addEventListener("click", openDropdown);
}
