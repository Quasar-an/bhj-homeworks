document.addEventListener('DOMContentLoaded', () => {
    const rotators = document.querySelectorAll('.rotator');

    rotators.forEach((rotator) => {
        const cases = rotator.querySelectorAll('.rotator__case');
        let currentIndex = 0;

        const switchCase = () => {
            const currentCase = cases[currentIndex];
            currentCase.classList.remove('rotator__case_active');

            currentIndex = (currentIndex + 1) % cases.length;

            const nextCase = cases[currentIndex];
            nextCase.classList.add('rotator__case_active');
            nextCase.style.color = nextCase.dataset.color;

            setTimeout(switchCase, parseInt(nextCase.dataset.speed, 10));
        };

        const firstCase = cases[currentIndex];
        firstCase.style.color = firstCase.dataset.color;
        setTimeout(switchCase, parseInt(firstCase.dataset.speed, 10));
    });
});

