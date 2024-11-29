const timerElement = document.getElementById('timer');

let timerValue = 59;

function formatTime(seconds) {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
}

timerElement.textContent = formatTime(timerValue);

const countdown = setInterval(() => {
    if (timerValue > 0) {
        timerValue -= 1;
        timerElement.textContent = formatTime(timerValue);
    } else {
        clearInterval(countdown);

        showImage();
    }
}, 1000);

function showImage() {
    window.location.href = 'https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGNhdHxlbnwwfHx8fDE2ODM3MTUwNzE&ixlib=rb-4.0.3&q=80&w=1080';
}
