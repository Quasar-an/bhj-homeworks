document.addEventListener('DOMContentLoaded', () => {
    const pollTitle = document.getElementById('poll__title');
    const pollAnswers = document.getElementById('poll__answers');
  
    function createAnswerButton(answerText) {
      const button = document.createElement('button');
      button.classList.add('poll__answer');
      button.textContent = answerText;
  
      button.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');
      });
  
      return button;
    }
  
    fetch('https://students.netoservices.ru/nestjs-backend/poll')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Полученные данные:', data);
        pollTitle.textContent = data.data.title;
  
        const answers = data.data.answers;
        answers.forEach((answer) => {
          const button = createAnswerButton(answer);
          pollAnswers.appendChild(button);
        });
      })
      .catch((error) => {
        console.error('Ошибка загрузки данных:', error);
      });
  });
  