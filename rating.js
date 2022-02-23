var stars = document.getElementsByClassName("star");
var state = false;
document.addEventListener("DOMContentLoaded", function () {
    console.log(state);
    for (let i = 0; i < stars.length; i++) {
        stars[i].addEventListener("mouseover", () => {
            if (!state) {
                console.log(state);
                for (let j = 0; j <= i; j++) {
                    stars[j].style.color = "#f0da61";
                }
            }
        }, false);

        stars[i].addEventListener("mouseout", () => {
            if (!state) {
                console.log(state);
                for (let j = 0; j < stars.length; j++) {
                    stars[j].style.color = "#a09a9a";
                }
            }
        }, false);
    }

    for (let i = 0; i < stars.length; i++) {
        stars[i].addEventListener("click", () => {
            state = true;
            console.log(state);
            for (let j = 0; j <= i; j++) {
                stars[j].style.color = "#f0da61";
            }
            for (let k = i + 1; k < stars.length; k++) {
                stars[k].style.color = "#a09a9a";
            }
        }, false);
    }
});