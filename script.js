const toggle = document.getElementById("toggle");
const toggle_bg = document.getElementById("toggle_bg");
const menu_ele = document.getElementById("menu");

let btn = false;
function mode() {
  btn = !btn;
  if (btn) {
    toggle_bg.classList.add("toggle_bg");
    toggle.classList.add("toggle");
    document.body.classList.add("body_toggle");
  } else {
    toggle_bg.classList.remove("toggle_bg");
    toggle.classList.remove("toggle");
    document.body.classList.remove("body_toggle");
  }
}
let menu_btn = false;
function menu() {
  menu_btn = !menu_btn;
  if (window.screen.width < 768) {
    console.log("menu called");
    if (menu_btn) {
      menu_ele.style.display = "block";
    } else {
      menu_ele.style.display = "none";
    }
  }
}
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    menu_ele.style.display = "none";
  } else {
    menu_ele.style.display = menu_btn ? "block" : "none";
  }
});
