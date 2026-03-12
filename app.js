// Попап пополнения
const depositPopup = document.getElementById('depositPopup');
document.querySelector('.deposit-btn').addEventListener('click', () => {
    depositPopup.style.display = 'block';
});
document.querySelector('.close-popup').addEventListener('click', () => {
    depositPopup.style.display = 'none';
});

// Connect TON
document.querySelector('.connect-btn').addEventListener('click', () => {
    alert("Connect TON (тестовая версия)");
});

// Кнопки игр
document.querySelectorAll('.play-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Игра пока тестовая');
    });
});

// Пример: добавление тестового баланса через кнопки пополнения
document.querySelectorAll('.deposit-option').forEach(option => {
    option.addEventListener('click', () => {
        const value = parseInt(option.textContent.split(' ')[0]); // 200, 500 и т.д.
        const coinCount = document.querySelector('.coin-count');
        let current = parseInt(coinCount.textContent);
        coinCount.textContent = current + value + ' BUR';
        depositPopup.style.display = 'none';
    });
});