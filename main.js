const openc = document.getElementById("open");
const closec = document.getElementById("close");
const container = document.querySelector(".container");

openc.addEventListener("click", () => {
  container.classList.add("shownav");
});
closec.addEventListener("click", () => {
  container.classList.remove("shownav");
});
