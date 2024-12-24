const loader = document.getElementById('loader');
const itemsContainer = document.getElementById('items');

function createCurrencyItem(code, value) {
    const item = document.createElement('div');
    item.classList.add('item');

    item.innerHTML = `
    <div class="item__code">${code}</div>
    <div class="item__value">${value}</div>
    <div class="item__currency">руб.</div>
  `;

  return item;
}


fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const currencies = data.response.Valute;

    for (const key in currencies) {
        const currency = currencies[key];
        const item = createCurrencyItem(currency.CharCode, currency.Value.toFixed(2));
        itemsContainer.appendChild(item);
      }
    })
    .catch((error) => {
      console.error('Ошибка загрузки данных:', error);
    })
    .finally(() => {
        loader.classList.remove('loader_active');
    });