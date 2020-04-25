const aboutCard = document.querySelector(".about-card");

window.onscroll = function() { cardGrow() };

function cardGrow() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        aboutCard.className = "big-card"
    }
}