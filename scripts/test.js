const pageImages = document.getElementsByTagName("img");
const degs = 5;
const images = [];

Array.from(pageImages).forEach((element, index) => {
  console.log("element: ", element);
  console.log("index", index);
  images[index] = {
    element: element,
    angle: degs,
    live: false,
  };
  images[index]?.element.addEventListener("click", () => {
    if (images[index].live) {
      clearInterval(images[index].timer);
      images[index].live = false;
    } else {
      images[index].timer = setInterval(() => {
        if (images[index].angle == 365) {
          images[index].angle = degs;
        } else {
          images[index].angle += degs;
        }
        images[
          index
        ].element.style.transform = `rotate(${images[index].angle}deg)`;
        images[index].live = true;
      }, 50);
    }
  });
});
