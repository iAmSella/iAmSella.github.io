const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const css = document.getElementById("css");

const setBackground = () => {
    document.body.style.background = `linear-gradient(to right bottom, ${color1.value}, ${color2.value})`;
    css.textContent = document.body.style.background + ";";
}

color1.addEventListener("input", setBackground);
color2.addEventListener("input", setBackground);