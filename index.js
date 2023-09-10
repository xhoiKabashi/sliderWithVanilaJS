const arrowL = document.querySelector(".arrowL");
const arrowR = document.querySelector(".arrowR");
const container = document.querySelector(".container");

arrowL.addEventListener("click", () => {
  if (container.classList.contains("photo1")) {
    container.classList.remove("photo1");
    container.classList.add("photo3");
  } else if (container.classList.contains("photo3")) {
    container.classList.remove("photo3");
    container.classList.add("photo2");
  } else {
    container.classList.remove("photo2");
    container.classList.add("photo1");
  }
});

arrowR.addEventListener("click", () => {
    if (container.classList.contains("photo1")) {
      container.classList.remove("photo1");
      container.classList.add("photo2");
    } else if (container.classList.contains("photo2")) {
      container.classList.remove("photo2");
      container.classList.add("photo3");
    } else {
      container.classList.remove("photo3");
      container.classList.add("photo1");
    }
  });

