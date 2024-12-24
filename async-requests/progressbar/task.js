document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const progress = document.getElementById('progress');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const xhr = new XMLHttpRequest();
      const formData = new FormData(form);
  
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentComplete = event.loaded / event.total;
          progress.value = percentComplete;
        }
      };
  
      xhr.onload = () => {
        if (xhr.status === 200 || xhr.status === 201) {
          alert(`Файл успешно загружен! Ответ сервера: ${xhr.responseText}`);
        } else {
          alert(`Ошибка загрузки: ${xhr.status}`);
        }
      };
      
  
      xhr.onerror = () => {
        alert('Произошла ошибка при отправке файла.');
      };
  
      xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
      xhr.send(formData);
    });
  });
  