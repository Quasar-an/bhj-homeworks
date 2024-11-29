const counterElement = document.getElementById('clicker__counter');
const cookieElement = document.getElementById('cookie');
let lastClickTime = 0;
let clickCount = 0;
let clickSpeedElement = document.createElement('div');
clickSpeedElement.classList.add('click-speed');
document.querySelector('.clicker').appendChild(clickSpeedElement);

function updateClickSpeed() {
    const currentTime = Date.now();
    const timeDifference = (currentTime - lastClickTime) / 1000;
    let clickSpeed = 0;

    if (timeDifference > 0) {
        clickSpeed = 1 / timeDifference;
    }

    clickSpeedElement.textContent = `Скорость клика: ${clickSpeed.toFixed(2)} кликов/сек`;
    lastClickTime = currentTime;
}

cookieElement.addEventListener('click', () => {
    clickCount++;
    counterElement.textContent = clickCount;

    const newWidth = (cookieElement.width === 200) ? 220 : 200;
    const newHeight = (cookieElement.height === 200) ? 220 : 200;
    cookieElement.width = newWidth;
    cookieElement.height = newHeight;

    updateClickSpeed();
});
