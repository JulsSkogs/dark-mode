const toggleSwitch = document.querySelector("input[type='checkbox']");
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

const darkTheme = "dark";
const lightTheme = "light";

// Dark or Light Images
function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// Further refactor darkMode() and lightMode()
function toggleDarkLightMode(isDark) {
  nav.style.backgroundColor = isDark
    ? "rgb(0 0 0 / 50%)"
    : "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = isDark
    ? "rgb(255 255 255 / 50%)"
    : "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
  isDark
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  isDark ? imageMode(darkTheme) : imageMode(lightTheme);
}

// // Dark Mode Styles
// function darkMode() {
//   nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
//   textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
//   toggleIcon.children[0].textContent = "Dark Mode";
//   toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
//   imageMode("dark");
// }

// // Light Mode Styles
// function lightMode() {
//   nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
//   textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";
//   toggleIcon.children[0].textContent = "Light Mode";
//   toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
//   imageMode("light");
// }

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", darkTheme);
    localStorage.setItem("theme", darkTheme);
    toggleDarkLightMode(darkTheme);
  } else {
    document.documentElement.setAttribute("data-theme", lightTheme);
    localStorage.setItem("theme", lightTheme);
    toggleDarkLightMode(lightTheme);
  }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check localStorage for Theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === darkTheme) {
    toggleSwitch.checked = true;
    toggleDarkLightMode(darkTheme);
  }
}
