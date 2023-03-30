let land = document.getElementById("land");
let img = document.getElementById("imm");

window.addEventListener("scroll", () => {
  land.style.cssText = `filter: blur(${window.pageYOffset / 100}px);`;
  land.style.cssText = `filter: brightness(${window.pageYOffset / 100}px);`;

  land.style.backgroundSize = `${160 - window.pageYOffset / 12}% ${
    160 - window.pageYOffset / 12
  }%`;
});
