const downButton = document.getElementById('down-button');

downButton.addEventListener('click', () => {
    const coloredSection = document.getElementById('colored-section');
    coloredSection.scrollIntoView({ behavior: 'smooth' });
});


let sliderPosition = 1;

setInterval(() => {
    if (sliderPosition < 4) {
        const item = document.querySelector(`.slider-item:nth-child(${sliderPosition})`);
        const nextItem = document.querySelector(`.slider-item:nth-child(${sliderPosition + 1})`);
        setTimeout(() => {
            item.style.width = '0%';
            nextItem.style.width = '100%';
            item.style.minWidth = '0%';
            nextItem.style.minWidth = '100%';
            sliderPosition += 1;
        }, 10);
    }
    else {
        const item = document.querySelector(`.slider-item:nth-child(${sliderPosition})`);
        const nextItem = document.querySelector(`.slider-item:nth-child(2)`);
        setTimeout(() => {
            item.style.width = '0%';
            nextItem.style.width = '100%';
            item.style.minWidth = '0%';
            nextItem.style.minWidth = '100%';
            sliderPosition = 2;
        }, 10);
    }
}, 3000);