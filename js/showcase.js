const imgGrow = () => {
    const topLeft = document.querySelector('.top-left');
    const topRight = document.querySelector('.top-right');
    const topLefth1 = document.querySelector('.top-left h1');
    const topRighth1 = document.querySelector('.top-right h1');
    const topLeftbtn = document.querySelector('#btn1');
    const topRightbtn = document.querySelector('#btn2');
    const textLeft = document.querySelector('.top-left h1');
    const textRight = document.querySelector('.top-right h1');

    topLeft.addEventListener('mouseover', () => {
        topLeft.style.width = "99.98%";
        topRight.style.width = ".1%";
        textRight.style.opacity = "0";
        topLeftbtn.style.opacity = "1";
    });
    topLeft.addEventListener('mouseleave', () => {
        topLeft.style.width = "49.95%";
        topRight.style.width = "49.95%";
        topLeftbtn.style.opacity = "0";
        setTimeout(() => {
            textRight.style.opacity = "1";
        }, 300);
    });
    topRight.addEventListener('mouseover', () => {
        topRight.style.width = "99.98%";
        topLeft.style.width = ".1%";
        textLeft.style.opacity = "0";
        topRightbtn.style.opacity = "1";

    });
    topRight.addEventListener('mouseleave', () => {
        topRight.style.width = "49.95%";
        topLeft.style.width = "49.95%";
        topRightbtn.style.opacity = "0";
        setTimeout(() => {
            textLeft.style.opacity = "1";
        }, 300);
    });

};

imgGrow();