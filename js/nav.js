const navMobile = () => {
    const menuIcon = document.querySelector('.burger');
    const menu = document.querySelector('.mobile-link-box');
    const links = document.querySelectorAll('.nav-links-mob');
    const line1 = document.querySelector(".line1");
    const line2 = document.querySelector(".line2");
    const line3 = document.querySelector(".line3");

    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('mobile-link-box-active');
        menuIcon.classList.toggle('toggle');
    });
}

navMobile();

// for (var i = 0; i < two.length; i++) {
//     two[i].classList.toggle("twoanimated");
//   }