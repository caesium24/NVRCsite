// const imgGrow = () => {
//     const topLeft = document.querySelector('.top-left');
//     const topRight = document.querySelector('.top-right');
//     const topLeftH1 = document.querySelector('#topLeftH1');
//     const topRightH1 = document.querySelector('#topRightH1');
//     const topLeftH2 = document.querySelector('#topLeftH2');
//     const topRightH2 = document.querySelector('#topRightH2');
//     const topLeftbtn = document.querySelector('#btn1');
//     const topRightbtn = document.querySelector('#btn2');
//     const textLeft = document.querySelector('.top-left h1');
//     const textRight = document.querySelector('.top-right h1');

//     topLeft.addEventListener('mouseover', () => {
//         topLeft.style.width = "99.98%";
//         topRight.style.width = ".1%";
//         textRight.style.opacity = "0";
//         topLeftbtn.style.opacity = "1";
//         topLeftH1.style.fontSize = "5rem";
//         topLeftH2.style.fontSize = "3rem";
//     });
//     topLeft.addEventListener('mouseleave', () => {
//         topLeft.style.width = "49.95%";
//         topRight.style.width = "49.95%";
//         topLeftbtn.style.opacity = "0";
//         topLeftH1.style.fontSize = "3rem";
//         topLeftH2.style.fontSize = "1.5rem";
//         setTimeout(() => {
//             textRight.style.opacity = "1";
//         }, 300);
//     });
//     topRight.addEventListener('mouseover', () => {
//         topRight.style.width = "99.98%";
//         topLeft.style.width = ".1%";
//         textLeft.style.opacity = "0";
//         topRightbtn.style.opacity = "1";
//         topRightH1.style.fontSize = "5rem";
//         topRightH2.style.fontSize = "3rem";
//     });
//     topRight.addEventListener('mouseleave', () => {
//         topRight.style.width = "49.95%";
//         topLeft.style.width = "49.95%";
//         topRightbtn.style.opacity = "0";
//         topRightH1.style.fontSize = "3rem";
//         topRightH2.style.fontSize = "1.5rem";
//         setTimeout(() => {
//             textLeft.style.opacity = "1";
//         }, 300);
//     });
// };

// imgGrow();