const aboutCard = document.querySelector(".about-card");

window.onscroll = function() { cardGrow() };

function cardGrow() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        aboutCard.className = "big-card"
    }
}