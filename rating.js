var stars = document.getElementsByClassName("star");
var clicked = false;
document.addEventListener("DOMContentLoaded", () => {
    console.log(state);
    for (let i = 0; i < stars.length; i++) {
        stars[i].addEventListener("mouseover", () => {
            if (!clicked) {
                console.log(state);
                for (let j = 0; j <= i; j++) {
                    stars[j].style.color = "#f0da61";
                }
            }
        }, false);

        stars[i].addEventListener("mouseout", () => {
            if (!clicked) {
                console.log(state);
                for (let j = 0; j < stars.length; j++) {
                    stars[j].style.color = "#a09a9a";
                }
            }
        }, false);

        stars[i].addEventListener("click", () => {
            clicked = true;
            console.log(state);
            for (let j = 0; j <= i; j++) {
                stars[j].style.color = "#f0da61";
            }
            for (let j = i + 1; j < stars.length; j++) {
                stars[j].style.color = "#a09a9a";
            }
        }, false);
    }
});