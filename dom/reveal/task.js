document.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;

        if (elementTop < windowHeight && elementTop > 0) {
            reveal.classList.add('reveal_active');
        } else {
            reveal.classList.remove('reveal_active');
        }
    });
});
