document.addEventListener('DOMContentLoaded', () => {
    const signinForm = document.getElementById('signin__form');
    const signinBlock = document.getElementById('signin');
    const welcomeBlock = document.getElementById('welcome');
    const userIdSpan = document.getElementById('user_id');

    const storedUserId = localStorage.getItem('user_id');
    if (storedUserId) {
        showWelcome(storedUserId);
    } else {
        signinBlock.classList.add('signin_active');
    }

    signinForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(signinForm);
        const login = formData.get('login');
        const password = formData.get('password');

        fetch('https://students.netoservices.ru/nestjs-backend/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ login, password })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    localStorage.setItem('user_id', data.user_id);
                    showWelcome(data.user_id);
                } else {
                    alert('Неверный логин/пароль');
                }
            })
            .catch(error => {
                console.error('Ошибка при отправке запроса:', error);
            });
    });

    function showWelcome(userId) {
        signinBlock.classList.remove('signin_active');
        welcomeBlock.classList.add('welcome_active');
        userIdSpan.textContent = userId;
    }
});