let deadCount = 0;
let lostCount = 0;

function getHole(index) {
    return document.getElementById('hole' + index);
}

function showMole() {
    const holes = document.querySelectorAll('.hole');
    holes.forEach(hole => hole.classList.remove('hole_has-mole'));

    const randomIndex = Math.floor(Math.random() * holes.length);
    holes[randomIndex].classList.add('hole_has-mole');
}

function checkHit(event) {
    const hole = event.target;

    if (hole.classList.contains('hole_has-mole')) {
        deadCount++;
        document.getElementById('dead').textContent = deadCount;
    } else {
        lostCount++;
        document.getElementById('lost').textContent = lostCount;
    }

    if (deadCount >= 10) {
        alert('Вы победили! Убили 10 кротов.');
        resetGame();
    } else if (lostCount >= 5) {
        alert('Вы проиграли! 5 промахов.');
        resetGame();
    }
}

function resetGame() {
    deadCount = 0;
    lostCount = 0;
    document.getElementById('dead').textContent = deadCount;
    document.getElementById('lost').textContent = lostCount;
}

document.querySelectorAll('.hole').forEach((hole, index) => {
    hole.addEventListener('click', checkHit);
});

function startGame() {
    setInterval(() => {
        showMole();
    }, 1000);
}

startGame();
