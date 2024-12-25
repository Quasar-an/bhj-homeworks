document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('editor');
    const clearButton = document.createElement('button');
    clearButton.textContent = 'Очистить содержимое';
    clearButton.style.marginTop = '10px';
    editor.parentNode.appendChild(clearButton);

    const savedText = localStorage.getItem('editor_text');
    if (savedText) {
        editor.value = savedText;
    }

    editor.addEventListener('input', () => {
        localStorage.setItem('editor_text', editor.value);
    });

    clearButton.addEventListener('click', () => {
        editor.value = '';
        localStorage.removeItem('editor_text');
    });
});