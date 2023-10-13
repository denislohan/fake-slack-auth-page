let screenSize = window.screen.availWidth;
let font_size;

if (screenSize > 1280) {
    font_size = (screenSize * 16) / 1920
} else {
    font_size = 11
}

document.documentElement.style.setProperty('font-size', `${font_size}px`)