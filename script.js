// Smooth active state for the mobile bottom navigation.
const navLinks = document.querySelectorAll(".bottom-nav a");
const sections = ["home","menu","wash","contact"].map(id => document.getElementById(id));

const setActive = () => {
  let current = "home";
  sections.forEach(section => {
    if (section && window.scrollY + 140 >= section.offsetTop) current = section.id;
  });
  navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === "#" + current));
};

window.addEventListener("scroll", setActive);
setActive();
