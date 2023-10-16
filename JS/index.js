const container = document.getElementById("gamesContainer");
const gamesButton = document.getElementById("gamesButton");

gamesButton.addEventListener("click", function () {
  if (container.style.display === "none" || container.style.display === "") {
    container.style.display = "flex";
  } else if (container.style.display === "flex") {
    container.style.display = "none";
  }
});
