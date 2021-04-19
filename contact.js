
const buttonL = document.querySelector('.btn');



function animateButton(rotate) {
    anime.remove(buttonL);
    anime({
        targets: buttonL,
        rotate: rotate
    });
}

buttonL.addEventListener('mouseenter', enterButton);
buttonL.addEventListener('mouseleave', leaveButton);

function enterButton() { animateButton([0, 1]) };
function leaveButton() { animateButton([1, 0]) };