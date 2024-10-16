const tiger = document.getElementById("tiger");
const images = document.getElementsByTagName("img");

const degs = 5;

const rotation = [];
console.log(images);
Array.from(images).forEach((element, index) => {
  console.log("element: ", element);
  console.log("index", index);
  rotation[index] = {
    element: element,
    angle: degs,
  };
  rotation[index].angle = degs;
  rotation[index]?.element.addEventListener("click", () => {
    if (rotation[index]?.live) {
      clearInterval(rotation[index].timer);
      rotation[index].live = false;
    } else {
      rotation[index].timer = setInterval(() => {
        if (rotation[index].angle == 365) {
          rotation[index].angle = degs;
        } else {
          rotation[index].angle += degs;
        }
        tiger.style.transform = `rotate(${rotation[index].angle}deg)`;
        rotation[index].live = true;
      }, 50);
    }
  });
});
