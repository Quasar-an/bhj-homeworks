document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('subscribe-modal');
    const closeModalButton = modal.querySelector('.modal__close');

    const setCookie = (name, value, options = {}) => {
        options = {
            path: '/',
            ...options
        };
        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        for (const optionKey in options) {
            updatedCookie += `; ${optionKey}`;
            if (options[optionKey] !== true) {
                updatedCookie += `=${options[optionKey]}`;
            }
        }
        document.cookie = updatedCookie;
    };

    const getCookie = (name) => {
        const matches = document.cookie.match(new RegExp(
            `(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    };

    if (!getCookie('modalClosed')) {
        modal.classList.add('modal_active');
    }

    closeModalButton.addEventListener('click', () => {
        modal.classList.remove('modal_active');
        setCookie('modalClosed', 'true', { 'max-age': 3600 * 24 * 365 });
    });
});