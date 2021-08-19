const tec = document.querySelector(".tec");
const container = document.querySelector(".container");

tec.addEventListener("click", () => {
  container.classList.toggle("active");
});
