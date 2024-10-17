const pageImages = document.getElementsByTagName("img");
const degs = 5;
const images = [];
//le degs dit au image combien tourner
Array.from(pageImages).forEach((element, index) => {
  console.log("element: ", element);
  console.log("index", index);
  images[index] = {
    element: element,
    angle: degs,
    live: false,
  }; //Ceci keeps track de combien l'image a déjà tourné
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
    } //Et ca dit au programe qu'il faut activer quand il y a un clique. Si il tourne déjà quand il y a un clique il faut arréter ou il était, etc..
  });
});
