const tiger = document.getElementById('tiger')

const degs = 5
let rotation = degs

setInterval(() => {
    if (rotation == 365) {
        rotation = degs
    } else {
        rotation += degs
    }
    tiger.style.transform = `rotate(${rotation}deg)`
}, 50)