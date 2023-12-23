const text = document.querySelector(".text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Snowify";
  }, 0);
  setTimeout(() => {
    text.textContent = "Joshua";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Snowi";
  }, 8000);
};

textLoad();
setInterval(textLoad, 120000);
