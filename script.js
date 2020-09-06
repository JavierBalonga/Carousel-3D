function left(iterations) {
    for (let i = 0; i < iterations; i++) {
        var imgs = document.querySelectorAll(".img");
        let classAux = imgs[0].className;
        let onclickAux = imgs[0].onclick;
        for (let i = 0; i < imgs.length - 1; i++) {
            imgs[i].className = imgs[i + 1].className;
            imgs[i].onclick = imgs[i + 1].onclick;
        }
        imgs[imgs.length - 1].className = classAux;
        imgs[imgs.length - 1].onclick = onclickAux;
    }
}

function right(iterations) {
    for (let i = 0; i < iterations; i++) {
        var imgs = document.querySelectorAll(".img");
        let classAux = imgs[imgs.length - 1].className;
        let onclickAux = imgs[imgs.length - 1].onclick;
        for (let i = imgs.length - 1; i > 0; i--) {
            imgs[i].className = imgs[i - 1].className;
            imgs[i].onclick = imgs[i - 1].onclick;
        }
        imgs[0].className = classAux;
        imgs[0].onclick = onclickAux;
    }
}

setInterval('right(1)',10000);